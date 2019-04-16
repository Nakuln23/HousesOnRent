const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');
const House = require('../models/House');

router.get('/test', (req,res) => {
    res.send("Owners are working")
})

router.post('/profile/upload', (req,res) => {
    const newHouse = new House ({
        price :req.body.price,
        city :req.body.city,
        address : req.body.address
     })
    House.create((newHouse))
    .then((house)=> res.send(house))
    .catch((err)=> res.send(err))
    
})

module.exports = router;