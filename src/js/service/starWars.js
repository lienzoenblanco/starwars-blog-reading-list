const URL = "https://www.swapi.tech/api"

export const getPeople = () => {
	const url = URL + "/people"
	return fetch(url);
};

export const getPlanets = () => {
	const url = URL + "/planets"
	return fetch(url);
};

export const getVehicles = () => {
	const url = URL + "/vehicles"
	return fetch(url);
};

export const getInformation = (type, id) => {
	const url = URL + `/${type}/${id}`
	console.log(url);
	return fetch(url)
};