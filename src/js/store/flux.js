import { getPeople, getVehicles, getPlanets, getInformation} from "../service/starWars.js";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favourites: [],
			info: [],
			
		},
		actions: {
			getPeople: () => {
				const store = getStore();
				if (store.characters.length === 0) {
					getPeople()
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ characters: json.results });
						})
						.catch((err) => {
							console.log(err);
						});
				}
			},
			
			getPlanet: () => { 
				const store = getStore();
				if (store.planets.length === 0) {
					getPlanets()
						.then(res => {
							return res.json();
						})
						.then(json => {
							setStore({ planets: json.results });
						})
						.catch((err) => {
							console.log(err);
						});
				}
			},
			getVehicle: () => { 
				const store = getStore();
				if (store.vehicles.length === 0) {
					getVehicles()
						.then(res => {
							return res.json();
						})
						.then(json => {
							setStore({ vehicles: json.results });
						})
						.catch((err) => {
							console.log(err);
						});
				}
			},
			
			getInfo: (type, id) => {
				const store = getStore();
				console.log(type, id);
				getInformation(type, id)
				
				.then(res => {
					return res.json();
				})
				.then(data => {
					const {result}=data;
					console.log(data)
					setStore({ info: result.properties });
					console.log(store)
				})
				.catch((err) => {
					console.log(err);
				});
			
			},
		}
	};
};

export default getState;