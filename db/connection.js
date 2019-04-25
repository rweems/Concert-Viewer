
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/concert-viewer", {useNewUrlParser: true})
    .then(() => {
        console.log("Mongodb connected");
    });



    module.exports = mongoose;