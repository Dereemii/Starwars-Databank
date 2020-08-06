const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
			planets: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople(url) {
				fetch(url)
					.then(response => {
						return response.json();
					})
					.then(data => setStore({ people: data.results }));
			},
			getPlanets(url) {
				fetch(url)
					.then(response => {
						return response.json();
					})
					.then(data => setStore({ planets: data.results }));
			}
		}
	};
};

export default getState;
