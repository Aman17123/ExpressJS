const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(con => {
  console.log(con.connections);
  console.log('DB connection successful!');
})

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour name is required'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'Tour price is required']
  }
})

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The Park Camper',
  price: 491
});

testTour.save().then(doc => {
  console.log(doc);
}).catch(err => {
  console.log('Error🤣🤣:', err);
})

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
