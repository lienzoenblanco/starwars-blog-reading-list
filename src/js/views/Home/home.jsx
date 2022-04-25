import React, {useEffect, useContext} from "react";

import "./home.css";
import { Context } from "../../store/appContext";

import { Card } from "../../component/Card/Card.jsx";


export const Home = () => {

	const {store, actions} = useContext(Context)

	const getData = () => {
		actions.getList('people')
		actions.getList('planets')
		actions.getList('starships')
	}
	
	useEffect(() => {
		getData();
	},[]);

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<h3 className="sec-Title my-3 text-warning text-center">Characters</h3>
				<div className="sec-cards row justify-content-center">
					{store.people.map((people) => <Card name={people.name} key={people.uid} uid={people.uid} type="people"/>)}
				</div>		
			</div>
			<div className="row justify-content-center">
				<h3 className="sec-Title my-3 text-warning text-center">Planents</h3>
				<div className="sec-cards row justify-content-center">
					{store.planets.map((planet) => <Card name={planet.name} key={planet.uid} uid={planet.uid} type="planets"/>)}
				</div>
			</div>
			<div className="row justify-content-center">
				<h3 className="sec-Title my-3 text-warning text-center">starships</h3>
				<div className="sec-cards row justify-content-center">
					{store.starships.map((starship) => <Card name={starship.name} key={starship.uid} uid={starship.uid} type="starships"/>)}
				</div>
			</div>
		</div>
		
	)
};
