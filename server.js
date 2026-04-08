const app = require('./app')
const mongoose = require('mongoose')

process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  console.log('Uncaught Exception!! 😭😭 Shutting down....');
  process.exit(1);
});


const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
  '<password>', 
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  }).then(() => console.log('DB connection successful!'));


const port = 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
 
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection!! 😭😭 Shutting down....');
  server.close(() => {
      process.exit(1);
  });
});

console.log(x);
