import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = (props) => {
    return(
        <div className="card card-sw">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <Link className="btn btn-primary border border-light text-light" to={`/details/${props.type}/${props.uid}`}>
						More details
				</Link>
            </div>
        </div>
    )
}

Card.propTypes = {
	type: Proptypes.string,
	name: Proptypes.string,
	uid: Proptypes.string,
}