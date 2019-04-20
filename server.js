const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 6000;
const keys = require('./config/keys')
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const {cloudinaryConfig} = require('./config/cloudinaryConfig')
const LocalStrategy = require("passport-local")

//Adding Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Importing routes
const userRoutes = require('./routes/user');
const houseRoutes = require('./routes/house');

//Express Routes
app.use('/user', userRoutes )
app.use('/house', houseRoutes )

//Express Sessions
app.use(session({
   secret: 'Big Secret',
   resave: false,
   saveUninitialized: true
 }))

 //Cloudinary 
app.use('*', cloudinaryConfig);

//Passport
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//DB Connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
.then(() => {console.log('MongoDB is connected')})
.catch((err) => {console.log(err)})


//Server
app.listen(port, (req,res)=>{
   console.log(`Server is running on ${port}`)
})
