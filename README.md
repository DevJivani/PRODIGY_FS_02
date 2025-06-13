# PRODIGY_FS_02
# Employee Management System

A simple and secure authentication app built with Node.js and Express. This application handles user registration, login, authentication using JWT (JSON Web Tokens), and protects private routes.

![Image](https://github.com/user-attachments/assets/3f10ddaf-8fd5-4a32-b045-c29b15a8eaf5)
![Image](https://github.com/user-attachments/assets/596bf9c1-d1ff-43fc-8aeb-7c3cb97c2c69)


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


