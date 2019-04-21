const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 6000;
const keys = require('./config/keys')
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const {cloudinaryConfig} = require('./config/cloudinaryConfig')


//Adding Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Express Sessions
app.use(session({
   secret: 'Big Secret',
   resave: true,
   saveUninitialized: true
 }))

//Passport Middleware
require('./config/passport')(passport)
app.use(passport.initialize());
app.use(passport.session());

//Importing routes
const userRoutes = require('./routes/user');
const houseRoutes = require('./routes/house');

//Express Routes
app.use('/user', userRoutes )
app.use('/house', houseRoutes )

 //Cloudinary 
app.use('*', cloudinaryConfig);

//Global Variables
app.use((req,res,next)=>{
  res.locals.user = req.user || null;
  next();
})

//DB Connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
.then(() => {console.log('MongoDB is connected')})
.catch((err) => {console.log(err)})


//Server
app.listen(port, (req,res)=>{
   console.log(`Server is running on ${port}`)
})
