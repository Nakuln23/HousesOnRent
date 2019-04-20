const express = require('express');
const router = express.Router();
const House = require('../models/House');

//Multer Config
const {uploader} = require('cloudinary')
const {multerUploads,dataUri} = require('../Middleware/multer')

//@route GET house/test
//@desc  Testing 
//@access Public

router.get('/test', (req,res) => {
    res.send("Houses are working")
})

//@route GET house/:city
//@desc  Searching a/c to city
//@access Public

router.post('/:city', (req,res)=> {
    House.find({city: req.body.city})
    .then(house => {
        if(!house) {
            res.json({City: "No Houses for your search exists"})
        } else {
        res.status(200).json(house)
    }})
    .catch(err => {throw err})
})

//@route GET /house/:id
//@desc  Finding a House by id 
//@access Public

router.get('/:id', (req,res) => {
    House.findById({id: req.params.id})
    .then(house => {
        res.send(house)
    })
    .catch(err=>{
        res.send(err)
    })
})

//@route POST house/create
//@desc  Creating house info
//@access Private

router.post('/create', multerUploads, (req,res) => {
        if(req.file) {
            const file = dataUri(req).content;
            return uploader.upload(file).then((result) => {
            const image = result.url
    
            const newHouse = new House ({
                ownerName:{
                    id: req.user.id,
                    name:req.user.name
                },
                name : req.body.name,
                price :req.body.price,
                picture : image,
                city :req.body.city,
                address : req.body.address,
                bedroom: req.body.bedroom,
                bathroom: req.body.bathroom,
                carSpaces: req.body.carspace
            })
            House.create((newHouse))
            .then((house)=> res.send(house))
            .catch((err)=> res.send(err))
    })
}})



module.exports = router;