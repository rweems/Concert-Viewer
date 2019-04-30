
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const Member = new mongoose.Schema({
    image: String,
    bio: String,
    memberName: String,
    role: String,
    bandId: {type:ObjectId, ref: 'Band'}
})

let MemberCollecton = mongoose.model('Member', Member);

module.exports = MemberCollecton;
