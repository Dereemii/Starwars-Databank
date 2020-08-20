const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],	
			favorites: [],	
		},
		actions: {
			getPeople: async url => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({
					people: data.results,
					previouspeople: data.previous,
					nextpeople: data.next
				})
				
			},
			getPlanets: async url => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({
					planets: data.results,
					previousplanet: data.previous,
					nextplanet: data.next
				})
			},
			getFavorites: favorite =>{
				const store = getStore();
				store.favorites.push(favorite)
				setStore({
					...store.favorites
				})
			},	
			removeFavorites: (favorite, i) => {
				const store = getStore();
				store.favorites = store.favorites.filter((favorite)=> favorite.favorite !== store.favorites[i].favorite)
				setStore({
					...store.favorites
				})
			}	
	},
};
}

export default getState;