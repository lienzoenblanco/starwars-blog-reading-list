import {getList, getInformation} from "../service/starWars.js"



const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favourites: [],
			details: {},
			
		},
		actions: {
			getList: (type) =>{
				const store = getStore();
				getList(type)
					.then(res => res.json())
					.then(data => {
						const {results}=data;
						setStore({...store, [type]: results });
					})
					.catch(err => console.error(err));
			},

			getItemDetails: (type, uid) => {
				const store = getStore();
				getInformation(type, uid)
					.then(res => res.json())
					.then(data =>{
						const {result} = data;
						setStore({...store, details: result.properties})
					})
					.catch(err => console.error(err));
			},

			addFavorites: (name) =>{
				const store=getStore();
				setStore({...store,favourites:[...store.favourites, name]});
			},

			deleteFaorites: (name) => {
				const store = getStore();
					setStore({...store, favourites:[store.favourites.filter((item) => item != name)]})
				
			}
				
		},
			
			
		
	}
};

export default getState;