# User Management API

## 📌 Overview
This is a **Fastify-based REST API** for managing user authentication, including **user registration, login, and JWT authentication**. Built using **Node.js, MongoDB, Fastify, and TypeScript**, it follows a **scalable and modular architecture**.

## 🚀 Features
- **User Registration** with **bcrypt password hashing**
- **User Login** with **JWT authentication**
- **MongoDB integration using Mongoose**
- **Fastify for high-performance API handling**
- **Environment variables using dotenv**
- **Scalable folder structure** for easy expansion

## 🛠 Tech Stack
- **Backend:** Fastify, Node.js, TypeScript
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT), bcrypt
- **Environment Management:** dotenv

---

## 📂 Project Structure
```
user-management-api/
│── src/
│   ├── models/
│   │   ├── User.ts
│   ├── routes/
│   │   ├── userRoutes.ts
│   ├── controllers/
│   │   ├── userController.ts
│   ├── config/
│   │   ├── database.ts
│   ├── app.ts
│── .env
│── package.json
│── README.md
```

---

## ⚙️ Setup & Installation
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/user-management-api.git
cd user-management-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file and add the following:
```
MONGO_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/mydatabase
JWT_SECRET=yourjwtsecret
```

### **4️⃣ Start the Server**
```sh
npm run dev
```

---

## 📌 API Endpoints

### **🔹 User Registration**
**POST** `/register`
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "securepass"
}
```
✅ **Response:**
```json
{
  "message": "User created successfully"
}
```

### **🔹 User Login**
**POST** `/login`
```json
{
  "email": "test@example.com",
  "password": "securepass"
}
```
✅ **Response:**
```json
{
  "token": "your-jwt-token"
}
```

---

## 📝 Future Improvements
🔹 Add **role-based access control (Admin/User)**
🔹 Implement **email verification using Nodemailer**
🔹 Expand to **profile management endpoints**

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing
Pull requests are welcome! If you find any issues, feel free to open an **Issue** in the repository.

---

## 📞 Contact
For any inquiries, reach out via [GitHub Issues](https://github.com/yourusername/user-management-api/issues).

---

🚀 **Happy Coding!**

