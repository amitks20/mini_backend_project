# mini_backend_project

# 📝 Notes API
A simple Node.js REST API for user authentication and note management using JWT and MongoDB.

## 📦 Project Structure
├── app.js
├── models/
│ ├── user.js
│ └── note.js
├── middleware/
│ └── auth.js
├── routes/
│ ├── auth.js
│ └── notes.js
├── .env.example
├── README.md
├── package.json


---

## 🚀 Features

- ✅ User registration & login
- ✅ JWT-based authentication
- ✅ Create & fetch personal notes
- ✅ MongoDB integration using Mongoose
- ✅ Password hashing using bcryptjs

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo

npm install

cp .env.example .env

MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=yourSecretKey

🔐 Authentication Endpoints
Request Body for Register:
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "yourpassword"
}
Response:
{
  "message": "User registered successfully"
}

Request Body for Login:
{
  "email": "alice@example.com",
  "password": "yourpassword"
}
Response:
{
  "token": "your.jwt.token"
}

✍️ POST /notes
Create a new note.
Request Body:
json
{
  "title": "Grocery List",
  "content": "Milk, Bread, Eggs"
}
Response:
{
  "_id": "note_id",
  "title": "Grocery List",
  "content": "Milk, Bread, Eggs",
  "user": "user_id",
  "createdAt": "2025-07-14T12:00:00Z",
  "updatedAt": "2025-07-14T12:00:00Z"
}

📄 GET /notes
Fetch all notes created by the logged-in user.
Response:
[
  {
    "_id": "note_id",
    "title": "Grocery List",
    "content": "Milk, Bread, Eggs",
    "user": "user_id",
    "createdAt": "2025-07-14T12:00:00Z",
    "updatedAt": "2025-07-14T12:00:00Z"
  }
]

🧰 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB + Mongoose
Auth: JWT + bcryptjs
Others: dotenv, cors

✨ Future Enhancements
🔄 Update & delete notes
📋 Input validation with express-validator
📁 Upload attachments to notes
📊 Add pagination to notes listing
