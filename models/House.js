const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HouseSchema = new Schema ([{
    index : {
        type: Number,
        default: 0
    },
    name:{
        type: String
    },
    price : {
        type: Number,
        //required: true
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

const House = mongoose.model('house', HouseSchema);
module.exports = House;