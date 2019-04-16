const express = require('express');
const router = express.Router();
const House = require('../models/House');

router.get('/test', (req,res) => {
    res.send("Houses are working")
})

module.exports = router;