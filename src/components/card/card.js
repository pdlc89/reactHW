import React from "react";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.choice.id} src={props.choice.image} />
        </div>
     
    </div>
);

export default Card;
