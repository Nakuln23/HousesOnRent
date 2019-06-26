import React from 'react'
import Header from './Header'

export default function () {
  return (
    <div>
     <Header />

{/* <!--                                             FEATURED CITY                                                 --> */}

<div class="container text-center">
  <h2 class ="h2 display-4 mt-5">Featured City </h2>
  <p class="my-3">Discover Thousands of homes in 48 countries</p>
</div>

{/* <!--                                                 CARDS                                                     --> */}
<div class="container">
  <div class="row mx-5 mt-5">
    
    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">New York</h5>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">Berlin</h5>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">Rome</h5>
       </div>
      </div>
    </div>

    
  </div>

  {/* <!--                                                   CARD-2                                      --> */}

  <div class="row mx-5 mt-4 ">
    
    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">New York</h5>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">Berlin</h5>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">Rome</h5>
       </div>
      </div>
    </div>

    
  </div>

  {/* <!--                                                 CARD-3                                               --> */}
  

  <div class="row mx-5 my-4 ">
    
    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">New York</h5>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">Berlin</h5>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div id= "card-image" class="card">
       <div class="card-body">
        <h5 class="card-title text-light">Rome</h5>
       </div>
      </div>
    </div>

    
  </div>
</div>
  
{/* <!--                                              What is houseOnRent                                     --> */}

<div id="info" class="container text-center">
  <h2 class="h2 display-4 mb-4">What is HousesOnRent?</h2>
  <p>Rentberry is a transparent rental application and price negotiation platform uniting tenants and landlords. It automates all the standard rental tasks from submitting personal information, customer offers and eSigning rental agreement to sending maintenance requests. Welcome to the Rentberry neighborhood – where new tenants are moving in every day!</p>
</div>

{/* <section>
  <div class="container text-center">
    <div class="row">
      <div class="col-md-4">
        <h2 class="display-4">Save More when you rent with us</h2>
      </div>
      <div class="col-md-4">
        <img src="" alt=""></img>
      </div>
      <div class="col-md-4">
        <img src="" alt=""></img>
      </div>
      <div class="col-md-4">
        <img src="" alt=""></img>
      </div>
    </div>
  </div>
</section> */}

{/* <!--                                                    Jumbotron                                         --> */}

<div class="jumbotron jumbotron-fluid">
  <div class="container text-center">
    <h4 class="h4">Searching for a Rental?</h4>
    <p class="lead">Your perfect home is waiting for you on Rentberry. Browse thousands of rentals worldwide, negotiate terms and price with a landlord, sign lease online and communicate with your landlord right on your laptop or smartphone.</p>
    <button class="btn btn-success btn-lg mt-2 px-5">Sign up for free</button>
  </div>
</div>

    </div>
  )
}
