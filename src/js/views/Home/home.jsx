import React, {useEffect, useContext} from "react";
import {getPeople as getPeopleService, getPlanets as getPlanetsService, getVehicles as getVehiclesService} from "../../service/starWars.js"

import "./home.css";
import { Context } from "../../store/appContext";

import { Card } from "../../component/Card/Card.jsx";


export const Home = () => {

	const {store, actions} = useContext(Context)
	console.log(store);

	const getData = async () => {
		try {
			const peopleRes = await getPeopleService();
			const peopleJson = await peopleRes.json();
			actions.setPeople(peopleJson.results)

			const planetsRes = await getPlanetsService();
			const planetsJson = await planetsRes.json()
			actions.setPlanets(planetsJson.results)

			const vehiclesRes = await getVehiclesService(); 
			const vehiclesJson = await vehiclesRes.json()
			actions.setVehicles(vehiclesJson.results)

		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => {
		getData();
	},[]);

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<h3 className="sec-Title my-3 text-warning text-center">Characters</h3>
				<div className="sec-cards row justify-content-center">
					{store.people.map((people, index) => <Card name={people.name} key={index} />)}
				</div>		
			</div>
			<div className="row justify-content-center">
				<h3 className="sec-Title my-3 text-warning text-center">Planents</h3>
				<div className="sec-cards row justify-content-center">
					{store.planets.map((planets, index) => <Card name={planets.name} key={index} />)}
				</div>
			</div>
			<div className="row justify-content-center">
				<h3 className="sec-Title my-3 text-warning text-center">Vehicles</h3>
				<div className="sec-cards row justify-content-center">
					{store.vehicles.map((vehicles, index) => <Card name={vehicles.name} key={index} />)}
				</div>
			</div>
		</div>
		
	)
};
