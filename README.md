# 💬 React Chat UI

A modular, responsive chat UI built with **React.js** and **Tailwind CSS**. It supports:

- 💾 Message persistence with `localStorage`
- 🧾 Text & file messaging (images, documents, etc.)
- 🕒 Timestamps using `Day.js`
- 📱 Fully responsive design
- 📦 Modular & reusable components

---

## 🚀 Features

- ✅ **Send & receive messages**
- 📂 **File & image support**
- 🕓 **Timestamps using Day.js**
- 🌗 **Responsive design** (mobile + desktop)
- ♻️ **Reusable components**
- 💾 **localStorage-based history**

---

## 📸 Demo
![Chat UI Demo](https://chat-ui-delta-bay.vercel.app/)  
<hr>
<img width="894" alt="Screenshot 2025-04-14 at 10 14 35 AM" src="https://github.com/user-attachments/assets/5b04f04a-fa45-4a92-9cd2-823ec1de33c5" />
<img width="894" alt="Screenshot 2025-04-14 at 10 15 19 AM" src="https://github.com/user-attachments/assets/855677d2-10f9-4378-b333-5c847e28907d" />

> Demo preview of text, file, and image messages

---

## ⚙️ Setup

### 1. Clone the project

```bash
  git clone https://github.com/your-username/react-chat-ui.git
  cd react-chat-ui
```

### 2. Install dependencies

```bash 
npm install
```

3. Start the app

```bash
npm run dev
```
 NOTE:  Make sure you're using Node.js 16+




 ## 📦 Dependencies

    React.js

    Tailwind CSS

    Day.js (for timestamp formatting)

Install Day.js manually if needed:

```bash
npm install dayjs
```

 ## 📋 Example Usage

Send a message:

```bash
{
  text: "Hello!",
  sender: "user",
  timestamp: 1713009353289
}
```

Send an image/file:

```bash 
{
  text: "",
  sender: "user",
  timestamp: 1713009353289,
  file: {
    type: "image", // or "file"
    url: "blob:http://...",
    name: "image.png"
  }
}
```

## 🧑‍💻 Author

Made with ❤️ by Raja Nayak
  
  Want to integrate this into a bigger app like a customer support system, team chat, or AI chatbot? I'm happy to help.


