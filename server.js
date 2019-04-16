const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 6000;
const keys = require('./config/keys')
const bodyParser = require('body-parser');
const passport = require('passport');

//Adding Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Importing routes
const userRoutes = require('./routes/user');
const ownerRoutes = require('./routes/owner');
const houseRoutes = require('./routes/house');
const searchRoutes = require('./routes/search');

//Express Routes
app.use('/user', userRoutes )
app.use('/owner', ownerRoutes)
app.use('/house', houseRoutes )
app.use('/search', searchRoutes)

//Passport


//DB Connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
.then(() => {console.log('MongoDB is connected')})
.catch((err) => {console.log(err)})



//Server
app.listen(port, (req,res)=>{
   console.log(`Server is running on ${port}`)
})
