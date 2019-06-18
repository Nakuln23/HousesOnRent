const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;
const keys = require('./config/keys')
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const {cloudinaryConfig} = require('./config/cloudinaryConfig')

app.use(cors())

//Adding Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Cloudinary 
app.use('*', cloudinaryConfig);
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

 //Global Variables
app.use((req,res,next)=>{
  res.locals.user = req.user || null;
  next();
})

//DB Connection
mongoose.connect(keys.mongoURI , { useNewUrlParser: true })
.then(() => {console.log('MongoDB is connected')})
.catch((err) => {console.log(err)})

if (process.env.NODE.ENV === 'production'){
  app.use(express.static("client", "build"))
}


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Server
app.listen(port, (req,res)=>{
   console.log(`Server is running on ${port}`)
})
