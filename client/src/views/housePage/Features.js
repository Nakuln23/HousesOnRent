import React from 'react'

const Features = () => {
    return (
        <div className="row property-details-list">
           <div className="col-md-4 col-sm-6">
                <p><i className="fa fa-check-circle-o"></i> Air conditioning</p>
                <p><i className="fa fa-check-circle-o"></i> Telephone</p>
                <p><i className="fa fa-check-circle-o"></i> Laundry Room</p>
            </div>
            <div className="col-md-4 col-sm-6">
                <p><i className="fa fa-check-circle-o"></i> Central Heating</p>
                <p><i className="fa fa-check-circle-o"></i> Family Villa</p>
                <p><i className="fa fa-check-circle-o"></i> Metro Central</p>
            </div>
            <div className="col-md-4">
                <p><i className="fa fa-check-circle-o"></i> City views</p>
                <p><i className="fa fa-check-circle-o"></i> Internet</p>
                <p><i className="fa fa-check-circle-o"></i> Electric Range</p>
            </div>
        </div>
    )
}

export default Features