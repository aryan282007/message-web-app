# message-web-app
A simple CRUD-based chat management web app where users can create, view, edit, and delete messages. Built using Node.js, Express.js, MongoDB, Mongoose, and EJS with a clean card-based UI.
# 💬 Mini Chat App

A simple chat management web application built using **Node.js**, **Express**, **MongoDB**, **Mongoose**, and **EJS**.
This project allows users to create, view, edit, and delete chat messages.

---

## 🚀 Features

* Create a new chat message
* View all chats
* Edit existing messages
* Delete chats
* Display sender, receiver, message, and timestamp
* Clean card-based UI design

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Frontend:** EJS Templates, CSS
* **Runtime Tools:** Nodemon (for development)

---

## 📂 Project Structure

```
project-folder
│
├── models
│   └── chat.js
│
├── public
│   ├── chat.css
│   └── new.css
│
├── views
│   ├── chats.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

1️⃣ Clone the repository

```
git clone https://github.com/yourusername/chat-app.git
```

2️⃣ Navigate into the project folder

```
cd chat-app
```

3️⃣ Install dependencies

```
npm install
```

4️⃣ Start MongoDB locally

Make sure MongoDB is running on:

```
mongodb://127.0.0.1:27017/whatsapp
```

5️⃣ Start the server

```
node index.js
```

or using nodemon

```
nodemon index.js
```

---

## 🌐 Application Routes

| Route             | Method | Description          |
| ----------------- | ------ | -------------------- |
| `/`               | GET    | Home route           |
| `/chats`          | GET    | Show all chats       |
| `/chats/new`      | GET    | Create new chat form |
| `/chats`          | POST   | Add new chat         |
| `/chats/:id/edit` | GET    | Edit chat            |
| `/chats/:id`      | PATCH  | Update chat          |
| `/chats/:id`      | DELETE | Delete chat          |

---

## 📸 Screenshot

Chat messages displayed in a **card layout** with sender, receiver, message, and timestamp.

---

## 🎯 Learning Goals

This project helps practice:

* RESTful routing
* CRUD operations
* MongoDB database integration
* Server-side rendering with EJS
* Express middleware
* Basic UI design

---

## 💡 Future Improvements

* Add user authentication
* Real-time chat using Socket.io
* Responsive mobile design
* Profile pictures
* Chat search feature

---

## 👨‍💻 Author

Aryan

---

⭐ If you like this project, consider giving it a star!

