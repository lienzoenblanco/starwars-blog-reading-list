import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";

import "./navbar.css"

import starWarsImage from "../../../img/Star_Wars_Yellow_Logo.svg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><img src={starWarsImage}/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<li className="nav-item dropdown">
							<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
								<span className="badge bg-secondary">{store.favourites.length}</span>
							</button>
							<ul className="dropdown-menu">
								{store.favourites.map((item,index)=>{
									return <div key={index}>
												<li className="dropdown-item" href="#">{item}
													<FontAwesomeIcon icon={faTrash} onClick={()=>actions.deleteFaorites(item)}/>
												</li>
											</div>
								})}
							</ul>
						</li>
				</div>
			</div>
		</nav>
	);
};
