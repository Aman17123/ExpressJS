const Tour = require('../models/tourModel');

<<<<<<< HEAD
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find()
    res.status(200).json({
=======
// GET ALL TOURS
exports.getAllTours = async (req, res) => {
  try {
       console.log(req.query);
    // BUILD QUERY
    // 1) Filtering
    const queryObj = { ...req.query};
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach( el => delete queryObj[el] );

    // 2) Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    console.log(JSON.parse(queryStr));
    
    const query  =  Tour.find(JSON.parse(queryStr));

    // { diffficulty: 'easy', duration: { $gte: 5} }
    // { diffficulty: 'easy', duration: { gte: '5'} }
    // gte , gt , lte , lt
     


    //* EXECUTE QUERY 
    const tours = await query;

    // const tours = await Tour.find()
    //   .where('duration')
    //   .equals(5)
    //   .where('difficulty')
    //   .equals('easy');

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// GET SINGLE TOUR
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    // Tour.findOne({_id: req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {

    res.status(404).json({
      status: 'fail',
      message: err
    });

  }
};


// CREATE TOUR
exports.createTour = async (req, res) => {
  try {

    const newTour = await Tour.create(req.body);

    res.status(201).json({
>>>>>>> 2bda1c5
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });

  } catch (err) {
<<<<<<< HEAD
    res.status(404).json({
=======

    res.status(400).json({
>>>>>>> 2bda1c5
      status: 'fail',
      message: err
    });

  }

<<<<<<< HEAD
  exports.getTour = async (req, res) => {
    try {
      const tour = await Tour.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data:{
          tour
        }
      })
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      })
    }

    // const tour = tours.find(el => el.id === id);

    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     tour
    //   }
    // });
  };

  exports.createTour = async (req, res) => {
    try {
      // const newTour = new Tour({})
      // newTour.save()
      const newTour = await Tour.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      })
    }
  };

  exports.updateTour = (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<Updated tour here...>'
      }
    });
  };

  exports.deleteTour = (req, res) => {
=======

// UPDATE TOUR
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true //* this is required like string, numbers
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });

  } catch (err) {

    res.status(404).json({
      status: 'fail',
      message: err
    });

  }
};


// DELETE TOUR
exports.deleteTour = async (req, res) => {
  try{
    await Tour.findByIdAndDelete(req.param.id);

>>>>>>> 2bda1c5
    res.status(204).json({
      status: 'success',
      data: null
    });
<<<<<<< HEAD
  };
=======

  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: null
    })
  }


};
>>>>>>> 2bda1c5
