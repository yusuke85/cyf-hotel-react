import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <h5>{props.name}</h5>
      <img src={props.image} />
      <p>{props.description}</p>
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
