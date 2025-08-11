# 💬 AI Chatbot Web App

A full-stack chatbot application that lets users send messages and receive AI-generated responses in real time.  
Built with **Node.js**, **Express.js**, and **Groq's LLaMA 3.3 model**, this app formats AI responses for rich HTML output including paragraphs, bold text, and lists.
<img width="1900" height="977" alt="image" src="https://github.com/user-attachments/assets/b20435bb-6a46-4811-8ae6-049ec7e60644" />
<img width="1902" height="972" alt="image" src="https://github.com/user-attachments/assets/98718280-94fc-49b2-8580-47e0cad17793" />

---

## 🚀 Features

- 🤖 **AI-Powered Chat** – Integrates Groq’s LLaMA 3.3 model for intelligent responses
- 📝 **HTML Formatting** – Converts AI responses into paragraphs, bold text, and ordered/unordered lists
- 🎨 **Dynamic UI** – Built using EJS templating for a clean and responsive chat interface
- 🔐 **Secure API Keys** – Uses dotenv for environment variable management
- 🔄 **Persistent Chat View** – Stores user and bot messages server-side for consistent conversation flow
- 🐍 **Python Integration Ready** – PythonShell included for optional Python script execution

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML, CSS
- **AI Integration:** Groq API (LLaMA 3.3)
- **HTTP Requests:** Axios
- **Other:** dotenv, PythonShell

---

## 📂 Project Structure
  - root/
  - index.js: "Main server file"
  - package.json: "Dependencies and scripts"
  - views/index.ejs: "Chat interface template"
  - public/: "Static assets (CSS, JS, images)"
  - .env: "Environment variables (API key)"
  - README.md: "Documentation"

installation:
  - step: "Clone the repository"
    command: |
      git clone https://github.com/your-username/ai-chatbot-web-app.git
      cd ai-chatbot-web-app
  - step: "Install dependencies"
    command: npm install
  - step: "Set up environment variables"
    details: "Create a .env file in the root directory and add your Groq API key"
    env_file:
      GROQ_KEY: "your_groq_api_key_here"
  - step: "Run the application"
    command: node index.js
  - step: "Open the app in your browser"
    url: "http://localhost:3000"

how_it_works:
  - "User sends a message through the chat UI."
  - "Server calls Groq’s API with the message."
  - "AI response is formatted to HTML for readability."
  - "Chat updates dynamically with both user and bot messages."

use_cases:
  - "Customer support assistants"
  - "Personal AI assistants"
  - "FAQ chatbots for websites"
  - "Educational tutors"

