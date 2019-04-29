

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const Band = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    genre: String,
    tourId: {type: ObjectId, ref: 'tour'}
});

let BandCollection = mongoose.model('Band',Band);
module.exports = BandCollection;