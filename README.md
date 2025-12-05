# 📝 MyBlog

A full-stack blogging platform built with **React**, **Node.js**, **Express**, and **MongoDB**. Create, share, and manage your blog posts with a modern, responsive interface.

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Prerequisites](#️-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🔐 Environment Variables](#-environment-variables)
- [📜 Available Scripts](#-available-scripts)
- [🔗 API Endpoints](#-api-endpoints)
- [📮 Postman Testing](#-postman-testing)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **User Authentication** | Secure login and registration with role-based access (Admin/User) |
| ✍️ **Blog Management** | Create, read, update, and delete blog posts |
| 💬 **Comments System** | Add and view comments on blog posts |
| 📊 **Dashboard** | Personal dashboard to manage your content |
| 👤 **Role-Based Users** | Support for Admin and User roles |
| 🎨 **Responsive Design** | Beautiful UI that works on all devices |

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 19** - Modern UI library
- 🎨 **Bootstrap 5** - Responsive CSS framework
- 🔀 **React Router DOM** - Client-side routing

### Backend
- 🟢 **Node.js** - JavaScript runtime
- 🚂 **Express 5** - Web framework
- 🍃 **MongoDB** - NoSQL database
- 🔗 **Mongoose** - MongoDB ODM

### Dev Tools
- 🔄 **Concurrently** - Run multiple scripts simultaneously
- 🔥 **Nodemon** - Auto-restart server on changes

---

## 📁 Project Structure

```
myblog/
├── 📂 backend/
│   ├── 📄 server.js          # Express server & MongoDB connection
│   ├── 📄 authRoutes.js      # Authentication routes (register/login)
│   ├── 📄 blogRoutes.js      # Blog post CRUD routes
│   ├── 📄 commentRoutes.js   # Comments routes
│   ├── 📄 userModel.js       # User schema (with role)
│   ├── 📄 blogPostModel.js   # Blog post schema
│   ├── 📄 commentModel.js    # Comment schema
│   └── 📄 .env               # Environment variables
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📄 AppNavbar.js     # Navigation bar
│   │   ├── 📄 Dashboard.js     # Dashboard component
│   │   ├── 📄 HomePage.js      # Landing page
│   │   ├── 📄 Login.js         # Login form
│   │   ├── 📄 Register.js      # Registration (with role selector)
│   │   ├── 📄 Services.js      # Blog articles list
│   │   ├── 📄 ArticleDetail.js # View post with comments
│   │   ├── 📄 About.js         # About page
│   │   ├── 📄 Contact.js       # Contact page
│   │   └── 📄 Footer.js        # Footer component
│   ├── 📄 App.js             # Main application with routes
│   ├── 📄 App.css            # Application styles
│   └── 📄 index.js           # React entry point
├── 📄 package.json           # Dependencies and scripts
└── 📄 README.md              # Project documentation
```

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- 📦 **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- 🍃 **MongoDB Atlas Account** - [Sign Up](https://www.mongodb.com/atlas)
- 💻 **Git** - [Download](https://git-scm.com/)
- 📮 **Postman** (optional) - [Download](https://www.postman.com/downloads/)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/flexycode/myblog.git
cd myblog
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the `backend/` directory (see [Environment Variables](#-environment-variables)).

### 4️⃣ Run the Application

```bash
npm run dev
```

🎉 **That's it!** 
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/myblog?retryWrites=true&w=majority

# Server Port
PORT=5000

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key_here
```

> ⚠️ **Important:** Whitelist your IP address in MongoDB Atlas Network Access!

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Runs frontend + backend concurrently |
| `npm start` | ⚛️ Runs React frontend only (port 3000) |
| `npm run backend` | 🖥️ Runs Express backend only (port 5000) |
| `npm run build` | 📦 Builds for production |
| `npm test` | 🧪 Runs test suite |

---

## 🔗 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user (with role) |
| `POST` | `/api/auth/login` | Login and get user info |

### 📝 Blog Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/blog` | Get all blog posts |
| `GET` | `/api/blog/:id` | Get single blog post |
| `POST` | `/api/blog` | Create new blog post |
| `PUT` | `/api/blog/:id` | Update blog post |
| `DELETE` | `/api/blog/:id` | Delete blog post |

### 💬 Comments

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/comments/:postId` | Get comments for a post |
| `POST` | `/api/comments` | Create new comment |
| `DELETE` | `/api/comments/:id` | Delete comment |

---

## 📮 Postman Testing

### Register Admin User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "admin",
  "email": "admin@example.com",
  "password": "password123",
  "role": "admin"
}
```

### Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "password123"
}
```

### Create Blog Post
```
POST http://localhost:5000/api/blog
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post...",
  "author": "admin"
}
```

### Get All Posts
```
GET http://localhost:5000/api/blog
```

### Add Comment
```
POST http://localhost:5000/api/comments
Content-Type: application/json

{
  "postId": "<blog-post-id>",
  "user": "admin",
  "text": "Great post!"
}
```

---

## 🤝 Contributing

Contributions are welcome! 

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/flexycode">flexycode</a>
</p>
