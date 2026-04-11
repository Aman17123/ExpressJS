const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  // 1️⃣ First create user
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  // 2️⃣ Then create token
  const token = jwt.sign(
    { id: newUser._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  );

  // 3️⃣ Send response
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser
    }
  });
});