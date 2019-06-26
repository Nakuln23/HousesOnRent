import React from "react";
import "./housedetail.css";
import HeaderImage from "./HeaderImage";
export default function DetailsComponent(props) {
  const { house } = props;
  console.log(house)
  return (
    <div className="detailspage" >
      <HeaderImage image={house.picture}/>

      <h1 className="detailsh">Rent: &#8377; {house.price}</h1>
      <p className="details">Bedrooms: {house.bedroom}</p>
      <p className="details">Bathrooms: {house.bathroom}</p>
      <p className="details">Location: {house.address}</p>
      <p className="details">City: {house.city}</p>
    </div>
  );
}