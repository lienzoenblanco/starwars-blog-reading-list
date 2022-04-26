import React, { useContext } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../../store/appContext";

export const Card = (props) => {

    const { store, actions } = useContext(Context)
    return(
        <div className="card card-sw">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <Link className="btn btn-secondary border border-light text-light" to={`/details/${props.type}/${props.uid}`}>
						More details
				</Link>
                <button className="btn btn-warning border border-light text-dark ms-2 float-end" 
                onClick={()=> actions.addFavorites(props.name)}>
                    <FontAwesomeIcon icon={faHeart}/>
                </button>
            </div>
        </div>
    )
}

Card.propTypes = {
	type: Proptypes.string,
	name: Proptypes.string,
	uid: Proptypes.string,
}