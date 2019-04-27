const band = require('../models/band.js');

const bandController = {
    index: (req,res) => {
        band.find().then(bands => {
            res.render('band/index', {bands});
        })
    },
    create:(req,res) => {
        band.create(req.body).then(()=> res.redirect('/{{tour._id}}'))
    },
    new: (req,res) => {
        res.render('band/create');
    }
}

module.exports = bandController;