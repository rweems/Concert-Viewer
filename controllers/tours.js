const tour = require('../models/tour.js');

const tourController = {
    index: (req,res) => {
        tour.find().then(tours => {
            res.render('concert/index', {tours});
           
        })
    },
    create:(req,res) => {
        tour.create(req.body)
        .then(()=> res.redirect('/'))
    },
    new: (req,res) => {
        res.render('concert/create');
        
    },
    edit: (req,res) => {
        tour.findById(req.params.id).then(tour => {
            res.render('concert/edit', {tour});
        })
    },
    update:(req,res) => {
        //find by id, update the body, return modified document
        tour.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
            res.redirect(`/${req.params.id}`)
        })
    },
    show:(req,res) => {
        tour.findById(req.params.id).then(tour => {
            res.render('concert/show',{tour})
            
        })
    },
    delete:(req,res) => {
        tour.findByIdAndRemove({'_id': req.params.id}).then(() => {
            res.redirect('/');
        });
    }
}

module.exports = tourController;