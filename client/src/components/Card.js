import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({house}) => {
	console.log(house)
    return (
        <div className="feature-item">
			<div className="feature-pic set-bg" data-setbg={house.picture} style={{backgroundImage: `url(${house.picture})`}}> 
				{/* <img src={house.picture} alt="" className="set-bg"/> */}
				<div className="sale-notic">FOR RENT</div>
			</div>
			<div className="feature-text">
				<div className="text-center feature-title">
					<h5>{house.name}</h5>
					<p><i className="fa fa-map-marker"></i>{house.address}, {house.city}</p>
				</div>
				<div className="room-info-warp">
					<div className="room-info">
						<div className="rf-left">
						    <p><i className="fa fa-th-large"></i> 800 Square foot</p>
							<p><i className="fa fa-bed"></i> {house.bedroom} Bedrooms</p>
						</div>
						<div className="rf-right">
							<p><i className="fa fa-car"></i> {house.carSpaces} Garages</p>
							<p><i className="fa fa-bath"></i> {house.bathroom} Bathrooms</p>
						</div>	
					</div>
					<div className="room-info">
						<div className="rf-left">
						   <p><i className="fa fa-user"></i> Tony Holland</p>
						</div>
						<div className="rf-right">
							<p><i className="fa fa-clock-o"></i> 1 days ago</p>
						</div>	
					</div>
				</div>
					<Link to = {`/house/${house._id}`} className="room-price">Rs.{house.price}</Link>
			</div>
		</div>
    )
}

export default Card
