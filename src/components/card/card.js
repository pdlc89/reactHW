import React from "react";
import "./Card.css"

const Card = props => (
    <div className="card">
        <div className="img-container">
            <button>

            <img alt="button"
            	value={props.choice.id}
            	src={props.choice.image}
            	onClick={() => props.handleClick(props.choice.id)} />
            </button>
        </div>
    </div>

);

export default Card;
