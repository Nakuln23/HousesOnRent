import React from 'react'

const PropertyDetail = ({house}) => {
    return (
        <div className="row property-details-list">
        <div className="col-md-4 col-sm-6">
            <p><i className="fa fa-th-large"></i> 1500 Square foot</p>
            <p><i className="fa fa-bed"></i> {house.bedroom} Bedrooms</p>
            <p><i className="fa fa-user"></i> Gina Wesley</p>
        </div>
        <div className="col-md-4 col-sm-6">
            <p><i className="fa fa-car"></i> {} Garages</p>
            <p><i className="fa fa-building-o"></i> {house.name}</p>
            <p><i className="fa fa-clock-o"></i> 1 days ago</p>
        </div>
        <div className="col-md-4">
            <p><i className="fa fa-bath"></i> {house.bathroom} Bathrooms</p>
            <p><i className="fa fa-trophy"></i> 5 years age</p>
        </div>
    </div> 
    )
}

export default PropertyDetail
