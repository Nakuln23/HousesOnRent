import React from 'react';
import Title from '../../components/Title';
import HouseNamePrice from './HouseNamePrice';
import HouseDesc from './HouseDesc';
import PropertyDetail from './PropertyDetail';
import Features from './Features';


const HouseDetail = ({house}) => {
    return (
        <div className="single-list-content">
           <HouseNamePrice house = {house}/>
            <h3 className="sl-sp-title">Property Details</h3>
            <PropertyDetail house={house}/>
            <h3 className="sl-sp-title">Description</h3>
            <HouseDesc/>
            <h3 className="sl-sp-title">Features</h3>
            <Features/>
        </div>
    )
}

export default HouseDetail
