import React from 'react';
import Title from '../../components/Title';
import {Link} from 'react-router-dom';
import bangalore from '../../assests/img/popular-places/bangalore.jpg';
import hyderabad from '../../assests/img/popular-places/hyderabad.jpeg';
import mumbai from '../../assests/img/popular-places/mumbai.jpg';
import pune from '../../assests/img/popular-places/pune.jpeg'; 

const PopularPlace = () => {
    return (
        <section className="gallery-section spad">
		<div className="container">
            <Title heading="Popular Places" lead="We understand the value and importance of place"/>
			<div className="gallery">
				<div className="grid-sizer"></div>
				<Link to="/search/bangalore" className="gallery-item grid-long set-bg" style={{backgroundImage : `url(${bangalore})`}}>
					<div className="gi-info">
						<h3>Bangalore</h3>
						<p>118 Properties</p>
					</div>
				</Link>
				<Link to="/search/bangalore" className="gallery-item grid-wide set-bg" style={{backgroundImage :`url(${hyderabad})`}}>
					<div className="gi-info">
						<h3>Hyderabad</h3>
						<p>112 Properties</p>
					</div>
				</Link>
				<Link to="/search/mumbai" className="gallery-item set-bg" style={{backgroundImage :`url(${mumbai})`}}>
					<div className="gi-info">
						<h3>Mumbai</h3>
						<p>72 Properties</p>
					</div>
				</Link>
				<Link to="/search/pune" className="gallery-item set-bg" style={{backgroundImage : `url(${pune})`}}>
					<div className="gi-info">
						<h3>Pune</h3>
						<p>50 Properties</p>
					</div>
				</Link>
				
			</div>
		</div>
	    </section>
    )
}

export default PopularPlace



