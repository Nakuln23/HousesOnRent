const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/test', (req,res) => {
    res.send("Users are working")
})

router.get('/signin',(req,res)=>{
    
})
module.exports = router;