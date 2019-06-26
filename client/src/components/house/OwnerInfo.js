import React from "react";
import "./ownerinfo.css";
export default function OwnerInfo(props) {
  const { owner } = props;
  return (
    <div className="card bg-dark mb-3">
      <div className="card-body houseCard " style={{marginTop: "200px "}}>
        <h5 className="card-title houseCard-titleh">Name : {owner.name}</h5>
        <p className="card-text houseCard-text ">Phone : {owner.phone}</p>
      </div>
    </div>
  );
}