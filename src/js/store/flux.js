import { getPeople, getVehicles, getPlanets, getInformation} from "../service/starWars.js";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favourites: [],
			info: [],
			
		},
		actions: {
			setPeople: (peopleList) => {
				setStore({people: peopleList})
				}
			},
			
			setPlanets: (planetsList) => {
				setStore({planets: planetsList})
			}
		
	};
};

export default getState;