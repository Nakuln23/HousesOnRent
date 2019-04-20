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
//@desc  Searching houses a/c to city
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
    console.log(req.body.name)            

        if(req.file) {
            const file = dataUri(req).content;
            return uploader.upload(file).then((result) => {
            const image = result.url
            console.log(req.body.name)            
             const newHouse = new House ({
                user:{
                    id: req.user.id,
                    name: req.user.name
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
            console.log(newHouse)
            House.create((newHouse))
            .then((house)=> res.json(house))
            .catch((err)=> res.json(err))
     })}
})

//@route PUT house/:id
//@desc  Update house info
//@access Private

router.put('/:id',(req,res)=>{
    House.findByIdAndUpdate({id: req.user.id}, req.body)
    .then((house)=> res.json(house))
    .catch((err)=> res.send(err))
})

//@route DELETE house/:id
//@desc  Delete house info
//@access Private

router.delete('/:id',(req,res)=>{
    House.findByIdAndDelete({id : req.user.id})
    .then(res.send("Details deleted"))
    .catch((err)=> res.send(err))
})



module.exports = router;