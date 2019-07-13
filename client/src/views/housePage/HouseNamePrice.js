import React from 'react';

const HouseNamePrice = ({house}) => {
    return (
        <div className="row">
          <div className="col-xl-8 sl-title">
            <h2>{house.name}</h2>
            <p><i className="fa fa-map-marker"></i>{house.location}, {house.city}</p>
          </div>
          <div className="col-xl-4">
            <a href="#" className="price-btn">Rs.{house.price}</a>
          </div>
        </div>
    )
}

export default HouseNamePrice
