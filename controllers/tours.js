const tour = require('../models/tour.js');

const tourController = {
    index: (req,res) => {
        tour.find().then(tours => {
            res.render('concert/index', {tours});
        })
    },
    create:(req,res) => {
        tour.create(newTour).then()
    },
    update:{},
    delete:{}
}

module.exports = tourController;