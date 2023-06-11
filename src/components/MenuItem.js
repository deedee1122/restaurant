import React from "react";

export default function MenuItem({ Image, name, price }) {
  return (
    <div className="menuItem">
      <img
        src={Image}
        alt=""
        style={{
          width: "100%",
          height: "200px",
          objectFit: 'cover',
          borderRadius: "10px 10px 0 0",
        }}
      />
      <h1>{name}</h1>
      <p>£{price}</p>
    </div>
  );
}