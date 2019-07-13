import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="footer-section set-bg" data-setbg="img/footer-bg.jpg">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6 footer-widget">
					<img src="img/logo.png" alt=""/>
					<p>Lorem ipsum dolo sit azmet, consecter dipise consult  elit. Maecenas mamus antesme non anean a dolor sample tempor nuncest erat.</p>
					<div className="social">
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-instagram"></i></a>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<a href="#"><i className="fa fa-linkedin"></i></a>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 footer-widget">
					<div className="contact-widget">
						<h5 className="fw-title">CONTACT US</h5>
						<p><i className="fa fa-map-marker"></i>3711-2880 Nulla St, Mankato, Mississippi </p>
						<p><i className="fa fa-phone"></i>(+88) 666 121 4321</p>
						<p><i className="fa fa-envelope"></i>info.leramiz@colorlib.com</p>
						<p><i className="fa fa-clock-o"></i>Mon - Sat, 08 AM - 06 PM</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 footer-widget">
					<div className="double-menu-widget">
						<h5 className="fw-title">POPULAR PLACES</h5>
						<ul>
							<li><Link to="/search/hyderabad">Hyderabad</Link></li>
							<li><Link to="/search/mumbai">Mumbai</Link></li>
							<li><Link to="/search/delhi">Delhi</Link></li>
							<li><Link to="/search/bangalore">Bangalore</Link></li>
							<li><Link to="/search/pune">Pune</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
    )
}

export default Footer
