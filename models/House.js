const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

const HouseSchema = new Schema ([{
    user : {
        _id: {
        type: Schema.Types.ObjectId,
        ref: User
        },
        name : String 
    },
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
       // required: true
    },
    address: {
        type: String,
       // required: true,
    },
    latitude:{
        type: Number,
    },
    longitude:{
        type: Number,
    },
    bedroom:{
        type: Number,
    },
    bathroom:{
        type: Number,
    },
    carSpaces:{
        type: Number,
    },
    
      
}])

const House = mongoose.model('House', HouseSchema);
module.exports = House;