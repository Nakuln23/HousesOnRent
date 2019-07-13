import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
			<div className="container">
				<Link className="navbar-brand" to="/">HousesOnRent</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
		        </button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/user/login">Log In</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user/register">Sign Up</Link>
						</li>
					</ul>
					{/* <ul className="navbar-nav ml-auto">
					 { authed ? 
					  <li class="nav-item">
						<button class="nav-link" 
						// onClick={logoutHandler} 
						>logout</button>
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
		            </ul> */}
	            </div>
	        </div>
        </nav>
    )
}

export default Navbar;