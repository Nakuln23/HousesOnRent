const express = require('express');
const router = express.Router();
const House = require('../models/House');

router.get('/test', (req,res) => {
    res.send("Searches are working")
})

router.post('/city', (req,res)=> {
    House.find({city: req.body.city} , (err,house) => {
        if (err) {
            throw err;
        } else {
            if(!house) {
                res.json({City: "No Houses for your search exists"})
            } else {
            res.status(200).json(house)
        }}
    })    
})

module.exports = router;