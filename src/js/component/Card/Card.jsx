import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = (props) => {
    return(
        <div className="card card-sw">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

Card.propTypes = {
	type: Proptypes.string,
	name: Proptypes.string,
	id: Proptypes.string
}