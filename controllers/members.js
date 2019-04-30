const member = require('../models/members.js');

const memberController = {
    index:(req,res) => {
        member.find().then(members => {
            res.render('member/index', {members})
        })
    },
    create:(req,res) => {
        member.create(req.body)
            .then(()=> res.render('member/index'))
    },
    new: (req,res) => {
        res.render('member/create');
    },
    edit: (req,res) => {
        member.findById(req.params.id).then(member => {
            res.render('member/edit', {member});
        })
    },
    update:(req,res) => {
        //find by id, update the body, return modified document
        member.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
            res.redirect(`/${req.params.id}`)
        })
    },
    show: (req,res) => {
        member.findById(req.params.id).then(band => {
            res.render('member/show', {band});
        })
    },
    delete: (req,res) => {
        member.findByIdAndRemove({'_id': req.params.id}).then(() => {
            res.redirect(`/${req.params.id}`)
        })
    }
}

module.exports = memberController;