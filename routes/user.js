const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')

router.get('/test', (req,res) => {
    res.send("Users are working")
})

router.post('/register', (req,res) => {
    User.findOne({email: req.body.email} , (err, user) => {
        if (err) {
            res.json(err)
        } else {
            if(user) {
             res.status(400).json({email: "Email already exists"})
            } else {
                const newUser = new User({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })
 
            
            bcrypt.genSalt(10, function(err, salt) {
             bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
              if(err) throw err;
              else {
                 newUser.password = hash;
                 newUser.save((err,user) => {
                   if (err) {
                       console.log(err)
                   } else {
                       res.json(user)
                   }
                 })}
             })
            })
        }
    }}
 )})

 module.exports = router;