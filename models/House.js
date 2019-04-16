const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HousesSchema = new Schema ([{
    index : {
        type: Number,
        default: 0
    },
    price : {
        type: Number,
        required: true
    },
    picture : {
        type: String,
    },
    city :{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    latitude:{
        type: Number,
    },
    longitude:{
        type: Number,
    },
    bedrooms:{
        type: Number,
    },
    bathrooms:{
        type: Number,
    },
    carSpaces:{
        type: Number,
    }
      
      
}])

const Houses = mongoose.model('houses', HousesSchema);
module.exports = Houses;