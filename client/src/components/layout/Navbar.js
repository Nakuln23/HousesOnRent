import React from 'react';
import {Link} from 'react-router-dom';
import {Logout} from '../../api'
function Navbar(props) {
  const {authed,logoutHandler} = props
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
       <Link class="navbar-brand" to="/">HousesOnRent</Link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
         </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
       <ul class="navbar-nav ml-auto">
       { authed ? 
       <li class="nav-item">
          <button class="nav-link" onClick={logoutHandler} >logout</button>
        </li>
        : 
        <React.Fragment>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Log In</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register">Sign Up</Link>
        </li>
        </React.Fragment>
       }
      </ul>
    </div>
  </div>
 </nav>
 </div>
  )
}

export default Navbar
