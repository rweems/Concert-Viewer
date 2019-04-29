const band = require('../models/band.js');
const tour = require('./tours.js')
const bandController = {
    index: (req,res) => {
        band.find().then(bands => {
            res.render('concert/show', {bands});
        })
    },
    create:(req,res) => {
        band.create(req.body)
            .then(()=> res.redirect(`/${tour._id}`))
    },
    new: (req,res) => {
        
        res.render('band/create');
    },
    edit: (req,res) => {
        tour.findById(req.params.id).then(band => {
            res.render('band/edit', {band});
        })
    },
    update:(req,res) => {
        //find by id, update the body, return modified document
        band.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
            res.redirect(`/${req.params.id}`)
        })
    },
    show: (req,res) => {
        band.findById(req.params.id).then(band => {
            res.render('band/show', {band});
        })
    },
    delete: (req,res) => {
        band.findByIdAndRemove({'_id': req.params.id}).then(() => {
            res.redirect(`/${req.params.id}`)
        })
    }
}

module.exports = bandController;