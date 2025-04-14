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


