//Set up express router
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//Set up models
const Owner = require('../models/Owner');
const House = require('../models/House');

router.get('/test', (req,res) => {
    res.send("Owners are working")
})

router.post('/register', (req,res) => {
    Owner.findOne({email: req.body.email} , (err, owner) => {
        if (err) {
            res.json(err)
        } else {
            if(owner) {
             res.status(400).json({email: "Email already exists"})
            } else {
                const newOwner = new Owner({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })
 
             bcrypt.genSalt(10, function(err, salt) {
             bcrypt.hash(newOwner.password, salt)
             .then(hash => {
                newOwner.password = hash;
                newOwner.save()
                .then((owner) => {
                    res.json(owner)
                })
                .catch((err)=> {
                    console.log(err)
                })
                 })
             .catch(err => {throw err})
            })
}}})})




module.exports = router