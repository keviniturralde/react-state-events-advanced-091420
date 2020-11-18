import React from "react";

const BeyCard = (props) => {
  return (
    <div className="card">
      <h2>{props.bey.name}</h2>
      <img alt="bey" src={props.bey.img}/>
    </div>
  );
};

export default BeyCard;
