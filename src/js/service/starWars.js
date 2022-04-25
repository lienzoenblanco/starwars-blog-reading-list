const URL = "https://www.swapi.tech/api"

export const getPeople = () => {
	const url = URL + "/people"
	return fetch(url);
};

export const getPlanets = () => {
	const url = URL + "/planets"
	return fetch(url);
};

export const getstarships = () => {
	const url = URL + "/starships"
	return fetch(url);
};

export const getList = (type) => {
	const url = `${URL}/${type}`
	return fetch(url);
};

export const getInformation = (type, uid) => {
	const url = URL + `/${type}/${uid}`
	return fetch(url)
};