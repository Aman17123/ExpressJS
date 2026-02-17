const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//! 1-Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/public`))

//! 2-Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


app.use(morgan('tiny'));


app.use((req, res, next) => {
  console.log('Hello from the middleware!');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});



//! GET request
// app.get('/api/v1/tours', getAllTours);

//! POST request
// app.post('/api/v1/tours', createTour);

//! GET request with id parameter
// app.get('/api/v1/tours/:id', getTour);

//! PATCH request
// app.patch('/api/v1/tours/:id', updateTour);

//! DELETE request
// app.delete('/api/v1/tours/:id', deleteTour );


module.exports = app;[]