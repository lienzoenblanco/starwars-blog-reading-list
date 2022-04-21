import React, {useEffect, useContext} from "react";
import {getPeople as getPeopleService, getPlanets as getPlanetsService, getVehicles as getVehiclesService} from "../../service/starWars.js"

import "./home.css";
import { Context } from "../../store/appContext";

import { Card } from "../../component/Card/Card.jsx";


export const Home = () => {

	const {store, actions} = useContext(Context)

	const getAllPeople = async () => {
		try {
			const res = await getPeopleService();
			const data = await res.json();
			console.log(data);
			actions.setPeople(json.data)
		} catch (error) {
			console.log(error)
		}
	}

	const getAllPlanets = async () => {
		try {
			const res = await getPlanetsService();
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error)
		}
	}

	const getAllVehicles = async () => {
		try {
			const res = await getVehiclesService();
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error)
		}
	}
	
	useEffect(() => {
		getAllPeople();
		getAllPlanets();
		getAllVehicles();
	},[]);

	return (
		<div>
			<h1>Home</h1>
			<div className="row">
				<Card />
			</div>
		</div>
		
	)
};
