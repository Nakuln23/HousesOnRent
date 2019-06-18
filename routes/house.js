const express = require('express');
const router = express.Router();
const House = require('../models/House');
const loggedIn = require('../Middleware/loggedIn')
const moment = require('moment')

const today = moment().startOf('day')


//Multer Config
const {uploader} = require('cloudinary')
const {multerUploads,dataUri} = require('../Middleware/multer')

//@route GET house/test
//@desc  Testing 
//@access Public
router.get('/test', (req,res) => {
    res.send("Houses are working")
})

//@route GET house/search/:city
//@desc  Searching houses a/c to city
//@access Public

router.get('/search/:city', (req,res)=> {
    const city = req.params.city
    House.find({city:city})
    .then(house => {
        if (!house) {
        res.json({error:"Nothing found"})
    } else {
        res.json(house)
    }})
    .catch(err => {throw err})
})

//@route GET /house/:id
//@desc  Finding a House by id 
//@access Public

router.get('/params/:id', (req,res) => {
    House.findById({_id: req.params.id})
    .then(house => {
        res.send(house)
    })
    .catch(err=>{
        res.send(err)
    })
})

//@route GET /house/recenthouses
//@desc  Finding latest Houses posted by admin 
//@access Public

router.get('/recenthouses', (req,res)=> {
    House.find({ createdAt: {
        $gte: today.toDate(),
        $lte: moment(today).endOf('year').toDate()
      }})
    .then(house => {
        res.send(house)
    })
    .catch(err => {
        res.send(err)
    })
})

//@route GET /house/featuredhouses
//@desc  Finding featured Houses  
//@access Public

router.get('/featuredhouses', (req,res)=> {
    House.find({featured : true})
    .then((house => {
        res.status(200).json(house)
    }))
    .catch((err) => {
        res.send(err)
    })
})

//@route POST house/create
//@desc  Creating house info
//@access Private

router.post('/create', multerUploads,  (req,res) => {
    console.log(req.body.name)            

        if(req.file) {
            const file = dataUri(req).content;
            return uploader.upload(file).then((result) => {
            const image = result.url
            console.log(req.body.name)            
             const newHouse = new House ({
                // user:{
                //     id: req.user.id,
                //     name: req.user.name
                // },
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
// router.post('/create',(req,res)=>{
//     console.log(req.body)
//     res.send(req.body)
// })


//@route PUT house/edit/:id
//@desc  Update house info
//@access Private

router.put('/edit/:id', loggedIn, (req,res)=>{
    House.findByIdAndUpdate({id: req.params.id}, req.body)
    .then((house)=> res.json(house))
    .catch((err)=> res.send(err))
})

//@route DELETE house/delete/:id
//@desc  Delete house info
//@access Private

router.delete('/delete/:id', loggedIn, (req,res)=>{
    House.findByIdAndDelete({id : req.params.id})
    .then(res.send("Details deleted"))
    .catch((err)=> res.send(err))
})



module.exports = router;