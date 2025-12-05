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
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **User Authentication** | Secure login and registration with JWT tokens |
| ✍️ **Blog Management** | Create, read, update, and delete blog posts |
| � **Dashboard** | Personal dashboard to manage your content |
| 🎨 **Responsive Design** | Beautiful UI that works on all devices |
| � **Fast & Reliable** | Built with modern technologies for optimal performance |

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
│   ├── 📄 authRoutes.js      # Authentication routes
│   ├── 📄 userModel.js       # User schema model
│   └── 📄 .env               # Environment variables (create this!)
├── 📂 public/
│   └── 📄 index.html         # HTML template
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📄 AppNavbar.js   # Navigation bar
│   │   ├── 📄 Dashboard.js   # Dashboard component
│   │   ├── 📄 HomePage.js    # Landing page
│   │   ├── 📄 Login.js       # Login form
│   │   ├── 📄 Register.js    # Registration form
│   │   ├── 📄 Services.js    # Services page
│   │   ├── 📄 About.js       # About page
│   │   ├── 📄 Contact.js     # Contact page
│   │   └── 📄 Footer.js      # Footer component
│   ├── 📄 App.js             # Main application component
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

🎉 **That's it!** Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/myblog?retryWrites=true&w=majority

# Server Port
PORT=5000

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key_here
```

### 🔑 How to Get MongoDB URI

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster (or use existing)
3. Click **"Connect"** → **"Drivers"** → **"Node.js"**
4. Copy the connection string and replace credentials

> ⚠️ **Important:** Whitelist your IP address in MongoDB Atlas Network Access settings!

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Runs both frontend and backend concurrently |
| `npm start` | ⚛️ Runs only the React frontend (port 3000) |
| `npm run backend` | 🖥️ Runs only the Express backend (port 5000) |
| `npm run build` | 📦 Builds the app for production |
| `npm test` | 🧪 Runs the test suite |

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and get JWT token |

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
