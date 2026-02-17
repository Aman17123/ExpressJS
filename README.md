Natours – MERN Stack Course Project

Natours is a full-stack tour booking application built while learning the MERN stack.
This project covers backend architecture, REST APIs, authentication, authorization, and deployment concepts.

🚀 Tech Stack

Frontend: React.js

Backend: Node.js + Express.js

Database: MongoDB + Mongoose

Authentication: JWT (JSON Web Tokens)

Styling: CSS / SCSS

API Testing: Postman

📂 Project Structure
natours/
│
├── client/              # React Frontend
│
├── server/              # Node + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── config/
├── package.json
└── README.md

⚙️ Features

✅ RESTful API
✅ MVC Architecture
✅ Custom Middleware
✅ 3rd Party Middleware (Morgan, etc.)
✅ CRUD Operations
✅ JWT Authentication
✅ Role-Based Authorization
✅ Error Handling
✅ Secure Password Hashing
✅ Environment Variables Configuration

📌 API Endpoints
Tours
GET     /api/v1/tours
GET     /api/v1/tours/:id
POST    /api/v1/tours
PATCH   /api/v1/tours/:id
DELETE  /api/v1/tours/:id

Users
POST    /api/v1/users/signup
POST    /api/v1/users/login
GET     /api/v1/users
PATCH   /api/v1/users/:id
DELETE  /api/v1/users/:id

🛠 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/natours.git
cd natours

2️⃣ Install Dependencies
npm install
cd client
npm install

3️⃣ Setup Environment Variables

Create a .env file in the root folder:

PORT=5000
DATABASE=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=90d

4️⃣ Run the Project

Backend:

npm run dev


Frontend:

cd client
npm start

🔐 Authentication Flow

User signs up / logs in

Server generates JWT token

Token sent in response

Protected routes verify token using middleware

📸 Screenshots

Add screenshots of your app here

📚 What I Learned

Express routing & middleware

Request/Response lifecycle

REST API best practices

MVC folder structure

MongoDB data modeling

Authentication & authorization

Clean code & refactoring
