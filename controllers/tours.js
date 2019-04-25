const tour = require('../models/tour.js');

const tourController = {
    index: (req,res) => {
        tour.find().then(tours => {
            res.render('concert/index', {tours});
            
        })
    },
    create:(req,res) => {
        tour.create(req.body).then(()=> res.redirect('/'))
    },
    new: (req,res) => {
        res.render('concert/createTour');
    },

    update:{},
    delete:{}
}

module.exports = tourController;