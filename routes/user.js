const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport')


//Nodemailer-sendgrid

const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport')
const {options, mailer} = require('../Middleware/nodemailer')

//@route GET user/test
//@desc  Testing 
//@access Public

router.get('/test', (req,res) => {
    res.send(req.session)
})

//@route POST user/register
//@desc  Register User
//@access Public

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
             bcrypt.hash(newUser.password, salt)
             .then(hash => {
                newUser.password = hash;
                newUser.save((err,user) => {
                  if (err) {
                      console.log(err)
                  } else {
                      res.json(user)
                  }})
            })
            .catch(err => {throw err})
            })
}}})})

//@route POST user/login
//@desc  Logging User
//@access Public
  
router.post('/login',passport.authenticate('local', {
            successRedirect: '/user/test',
            failureRedirect: '/login', }),
           )

//@route POST user/logout
//@desc  Log out User
//@access Public

router.get('/logout', (req,res) => {
    req.logout()
    res.send("logged out user successfully")
})

            

            // //Sending email
            // const email = {
            //     to: newUser.email,
            //     from: 'roger@tacos.com',
            //     subject: 'Thanks for registering!',
            //     text: 'We hope you are having a great time ',
            //     html: '<b>Awesome sauce</b>'
            // };

            // mailer.sendMail(email)
            // .then(res => res.json({email:"Email has been send to your mail address"}))
            // .catch(err => console.log(err))
            
       

 module.exports = router;