import React from 'react';

const RelatedHouses = ({relatedHouses}) => {
    console.log(relatedHouses)
    return (
        <div className="related-properties">
        <h2>Related Property</h2>
        {!relatedHouses ? null : relatedHouses.map(house => {
            return ( 
            <div className="rp-item">
                <div className="rp-pic set-bg" style={{backgroundImage : `url(${house.picture})`}}>
                    <div className="sale-notic">FOR RENT</div>
                </div>
                <div className="rp-info">
                    <h5>{house.name}</h5>
                    <p><i className="fa fa-map-marker"></i>{house.name}</p>
                </div>
                <a href="#" className="rp-price">Rs.{house.price}</a>
            </div>
            )
        })}
        </div>
    )
}

export default RelatedHouses
