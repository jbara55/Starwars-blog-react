const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			allPeople: [],
			allPlanets: [],
			allVehicles: [],
			People: {},
			PLanet: {},
			Vehicle: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getAllPeople: () => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ allPeople: result.results });
						console.log(store.allPeople);
					})
					.catch(error => console.log("error", error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getPeople: uid => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ People: result.result.properties });
						console.log(store.People);
					})
					.catch(error => console.log("error", error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getAllPlanets: () => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ allPlanets: result.results });
						console.log(store.allPlanets);
					})
					.catch(error => console.log("error", error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getPlanet: uid => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ Planet: result.result.properties });
						console.log(store.Planet);
					})
					.catch(error => console.log("error", error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getAllVehicles: () => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => {
						setStore({ allVehicles: result.results });
						console.log(store.allVehicles);
					})
					.catch(error => console.log("error", error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getVehicle: uid => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ Vehicle: result.result.properties });
						console.log(store.Vehicle);
					})
					.catch(error => console.log("error", error));
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
			}
		}
	};
};

export default getState;
