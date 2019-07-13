import React from 'react';
import './App.css';
import './index.css';
import "./assests/css/bootstrap.min.css"
import "./assests/css/animate.css";
//import "./assests/css/font-awesome.min.css";
import "./assests/css/magnific-popup.css";
import Navbar from './components/Navbar';
// import "./assests/js/jquery-3.2.1.min.js"
// import "./assests/css/owl.carousel.css";
// import "./assests/js/owl.carousel.min.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './views/landingPage/Index';
import SearchPage from './views/searchpage';
import HousePage from './views/housePage';
import Footer from './components/Footer';
import Login from './views/auth/Login';
import Register from './views/auth/Register';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Route exact path="/" component = {LandingPage}/>
      <Route exact path="/search/:city" component = {SearchPage}/>
      <Route exact path="/house/:house_id" component = {HousePage}/>
      <Route exact path="/user/register" component = {Register}/>
      <Route exact path="/user/login" component = {Login}/>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
