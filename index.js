import dotenv from 'dotenv'


import express from "express";
import axios from "axios";
import bodyParser from "body-parser"
import {PythonShell} from 'python-shell';
import Groq from "groq-sdk";

const app = express();
const port = 3000;
dotenv.config({ path: '.env' })


const groq = new Groq({ apiKey: process.env.GROQ_KEY });

const user_message_list = [];
const bot_message_list = [];


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

//function for calling the api to get the output by passing the question
export async function getGroqChatCompletion(question) {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
  }


//formating text to html
function formatTextToHTML(text) {
  // Escape HTML characters
  text = text.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;");

  // Convert double newlines into paragraphs
  text = text.split(/\n\s*\n/).map(para => `<p>${para.trim()}</p>`).join('');

  // Convert Markdown-style bold (**text**) to HTML bold
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert lists into proper <ul> and <li> elements
  text = text.replace(/\n\s*\*\s+(.*?)(?=\n|$)/g, '<li>$1</li>');
  text = text.replace(/(<li>.*<\/li>)+/g, match => `<ul>${match}</ul>`);

  // Convert numbered lists
  text = text.replace(/\n\s*\d+\.\s+(.*?)(?=\n|$)/g, '<li>$1</li>');
  text = text.replace(/(<li>.*<\/li>)+/g, match => `<ol>${match}</ol>`);

  return text;
}

//get route to render the website
app.get ('/',(req,res)=>{
    try{
        console.log("hello")
        console.log(req.body)
        res.render("index.ejs",{
          user:user_message_list,
          bot: bot_message_list,
          pass:1,
    })
    }
    catch(error){
        console.log("Error is"+error)
    }

    // 
})

//for getting the output after submitting the message
app.post ('/message',async(req,res)=>{
    console.log(req.body['id'])

    try{

        const chatCompletion = await getGroqChatCompletion(req.body['id']);
  // Print the completion returned by the LLM.
        const respose = chatCompletion.choices[0]?.message?.content || "";
        user_message_list.push(req.body['id'])
        // bot_message_list.push(respose)
        // console.log(respose)
        const formattedHTML = formatTextToHTML(respose);
        console.log(formattedHTML)
        bot_message_list.push(formattedHTML)
        console.log(bot_message_list)
        res.render("index.ejs",{
            user:user_message_list,
            bot: bot_message_list,
            pass: 1,
        })


    }
    catch(error){
        console.log("Error Type: "+error)

    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})