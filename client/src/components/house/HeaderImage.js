import React from "react";

export default function HeaderImage(props) {
  const { image } = props;
  return (
    //   <div style={{backgroundImage:`url${image}`}}></div>
    <img
      src={image}
      style={{ width: "1000px", height: "400px" }}
    />
  );
}