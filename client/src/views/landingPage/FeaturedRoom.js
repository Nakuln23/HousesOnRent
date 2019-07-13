import React from 'react';
import Card from '../../components/Card';
import Title from '../../components/Title';

const FeaturedRoom = ({houses}) => {
    // if (houses) {
    //     const mapHouses =
    // }
    return (
        <section className="feature-section spad">
		<div className="container">
          <Title heading = "Featured Listings" lead = "Browse houses and flats for sale and to rent in your area"/>     
           <div className="row">
			  {!houses ? null : houses.map(house => {
                return (
                <div className="col-lg-4 col-md-6">
                 <Card house={house}/> 
                </div> )
              })}
            </div>
        </div>
        </section>
    )
}

export default FeaturedRoom
         
