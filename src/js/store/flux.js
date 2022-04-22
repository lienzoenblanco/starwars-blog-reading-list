const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			// favourites: [],
			// info: [],
			
		},
		actions: {
				setPeople: (peopleList) => {
					setStore({people: peopleList})
				},

				setPlanets: (planetsList) => {
					setStore({planets: planetsList})
				},

				setVehicles: (vehiclesList) => {
					setStore({vehicles: vehiclesList})
				}
			},
			
			
		
	};
};

export default getState;