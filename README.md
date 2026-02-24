Natours – Advanced Node.js, Express & MongoDB Project

A complete backend travel tour booking application built while learning advanced Node.js concepts including MVC architecture, RESTful APIs, authentication, authorization, security, and deployment.

🚀 Live Demo

(Add your deployed link here after hosting)
🔗 https://your-live-link.com

📌 Project Overview

Natours is a production-level backend application that allows users to:

Browse tours

Filter & sort tours

View tour details

Sign up & log in

Book tours

Manage user profiles

Admin manage tours & users

This project follows MVC Architecture and industry best practices.

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Stripe Payment Integration

Nodemailer

Security Packages (Helmet, Rate Limit, xss-clean, etc.)

🧠 Features Implemented
✅ Authentication & Authorization

User Signup

Login / Logout

JWT-based authentication

Password encryption using bcrypt

Role-based access (Admin, User)

✅ Tour Management

CRUD operations

Advanced filtering

Sorting

Pagination

Aliasing routes

Aggregation pipelines

✅ Security

Data sanitization

NoSQL injection protection

XSS protection

HTTP security headers

Rate limiting

✅ Error Handling

Global error handling middleware

Operational vs Programming errors

Custom error class

📂 Project Structure (MVC)
natours/
│
├── controllers/
│   ├── tourController.js
│   ├── userController.js
│   └── authController.js
│
├── models/
│   ├── tourModel.js
│   └── userModel.js
│
├── routes/
│   ├── tourRoutes.js
│   └── userRoutes.js
│
├── utils/
│   ├── appError.js
│   └── catchAsync.js
│
├── config.env
├── app.js
└── server.js
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/natours.git
2️⃣ Install dependencies
npm install
3️⃣ Create a config.env file
PORT=3000
DATABASE=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=90d
4️⃣ Start the development server
npm run dev
🔐 API Endpoints Example
🗺 Tours

GET /api/v1/tours

GET /api/v1/tours/:id

POST /api/v1/tours

PATCH /api/v1/tours/:id

DELETE /api/v1/tours/:id

👤 Users

POST /api/v1/users/signup

POST /api/v1/users/login

GET /api/v1/users/me

🧪 Testing

You can test APIs using:

Postman

Thunder Client

Insomnia

🚀 Deployment

You can deploy using:

AWS

Render

Railway

Heroku (if available)

📚 What I Learned

Advanced Express architecture

Middleware chaining

MongoDB aggregation framework

Authentication flow with JWT

Production-level error handling

API security best practices

Environment configuration

Deployment strategies

👨‍💻 Author

Aman
Backend Developer | MERN Stack Learner

GitHub: https://github.com/Aman17123

⭐ If You Like This Project

Give it a ⭐ on GitHub!
