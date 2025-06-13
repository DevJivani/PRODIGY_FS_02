# 🔐 Authentication App

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

```bash
echo "## ⚙️ Setup Instructions

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/Authentication_app.git
   cd Authentication_app
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up your .env file:
   \`\`\`
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_jwt_secret
   PORT=5000
   \`\`\`

4. Start the server:
   \`\`\`bash
   npm start
   \`\`\`
" >> README.md
