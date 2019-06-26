import React, { Component } from 'react';
import {searchHouse} from '../../api';
import HouseDetail from './HouseDetail';
import OwnerInfo from './OwnerInfo';

export default class House extends Component {

    state= {
      owner: {
        name: "John Doe",
        phone: "122345678"
      },
        house: {}
    }

    componentDidMount = () => {
        searchHouse(this.props.match.params.house_id)
        .then((res)=> { 
        console.log(res)
        this.setState({
           house : res
        })}
        )}


  render() {
      const {house} = this.state
    return (

      <div className="row">
        <div className="col-lg-9" >
          <HouseDetail house={this.state.house} />
        </div>
        <div className="col-lg-3" >
          <OwnerInfo owner={this.state.owner} />
        </div>
      </div>
//       <div>
//         <section>
//    	<div className="container">
//     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src={house.picture} className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="..." className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="..." className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
// </div>
// </section>


// <section>
// 	<div className="container text-centre">
// 		<h3 className="h3 py-5">Description</h3>
// 		<p>{}</p>
// 		<h6 className="h6">No.of Bedrooms = {house.bedroom}</h6>
// 		<h6 className="h6">No.of Bathroom = {house.bathroom}</h6>
// 		<h6 className="h6">No.of CarSpaces = {house.carSpaces}</h6>

// 	</div> 
// </section>
//       </div>
    )
  }
}

