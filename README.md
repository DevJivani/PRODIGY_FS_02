# PRODIGY_FS_02
# Employee Management System

A simple and secure authentication app built with Node.js and Express. This application handles user registration, login, authentication using JWT (JSON Web Tokens), and protects private routes.

## 🚀 Features

- 🔏 User Registration (Sign Up)
- 🔐 User Login (Sign In)
- ✅ JWT-based Authentication
- 🔒 Access to Protected Routes
- 🌐 RESTful API Endpoints
- 🧠 Password Hashing with Bcrypt
- 📁 Environment Configuration using `.env`

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **JWT (jsonwebtoken)**
- **Bcrypt**
- **Dotenv**

##     Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd PRODIGY_FS_02
```

2. Install backend dependencies:
```bash
cd Backend
npm install
```

3. Install frontend dependencies:
```bash
cd Frontend
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your-mongodb-url
JWT_SECRET=your-super-secret-key-change-this-in-production
PORT=5000
```


