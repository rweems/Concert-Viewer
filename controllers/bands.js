const band = require('../models/band.js');
const tour = require('./tours.js')
const bandController = {
    index: (req,res) => {
        band.find()
            
            .then(bands => {
            res.render('band/index', {bands});
        })
    },
    create:(req,res) => {
        band.create(req.body)
            .then(()=> res.redirect(`/${tourId}`))
            
    },
    new: (req,res) => {
        
        res.render('band/create');
    },
    show: (req,res) => {
        band.findById(req.params.id)
        
        .then(band => {
            res.render('band/show', {band});
        })
    }
}

module.exports = bandController;