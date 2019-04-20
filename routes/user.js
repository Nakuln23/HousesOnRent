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
    res.send("Users are working")
})

////@route POST user/register
//@desc  Register User
//@access Public

// router.post("/register", function(req, res){
//     const newUser = new User({email: req.body.email});
   
//     db.USER.register(newUser, req.body.password, req.body.name, function(err, user){
//         if(err){
//             return res.json(err)
//         } else {
//             if(user) {
//                 res.status(400).json({email: "Email already exists"})
//             } else {
//         passport.authenticate("local")(req, res, function(){
//            res.json(user); 
//         })}}
//     });
//   });
  


            

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