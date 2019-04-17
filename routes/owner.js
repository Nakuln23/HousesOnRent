//Set up express router
const express = require('express');
const router = express.Router();

//Set up models
const Owner = require('../models/Owner');
const House = require('../models/House');

//Multer Config
const {uploader} = require('cloudinary')
const {multerUploads,dataUri} = require('../Middleware/multer')



router.get('/test', (req,res) => {
    res.send("Owners are working")
})

router.post('/profile/upload', multerUploads, (req,res) => {
    if(req.file) {
        const file = dataUri(req).content;
        return uploader.upload(file).then((result) => {
        const image = result.url

        const newHouse = new House ({
            price :req.body.price,
            picture : image,
            city :req.body.city,
            address : req.body.address
         })
        House.create((newHouse))
        .then((house)=> res.send(house))
        .catch((err)=> res.send(err))
        
        })}
})


module.exports = router