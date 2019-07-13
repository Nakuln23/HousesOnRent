import React from 'react';
import Title from '../../components/Title';

export default function RecentHouses({houses}) {
	console.log(houses)
    return (
        <section className="properties-section spad">
		 <div className="container">
		  <Title heading="RECENT PROPERTIES" lead="Discover how much the latest properties have been sold for"/>
			<div className="row">
			{!houses ? null : houses.map(house => {
				return (
					<div className="col-md-6">
						<div className="propertie-item set-bg" style={{backgroundImage: `url(${house.picture})`}}>
							<div className="sale-notic">FOR RENT</div>
							<div className="propertie-info text-white">
								<div className="info-warp">
									<h5>{house.name}</h5>
									<p><i className="fa fa-map-marker"></i> {house.address}, {house.city}</p>
							    </div>
							    <div className="price">Rs.{house.price}</div>
						    </div>
					    </div>
					</div>
				)
            })}
			</div>
         </div>
        </section>
    )
}
