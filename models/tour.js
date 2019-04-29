

const mongoose = require("../db/connection.js");


const Tour = new mongoose.Schema({
    name: String
});


let TourCollection = mongoose.model("tour", Tour);

module.exports = TourCollection;