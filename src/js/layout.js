import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { SinglePersonaje } from "./views/SinglePersonaje";
import { SinglePlaneta } from "./views/SinglePlaneta";
import { SingleVehiculo } from "./views/SingleVehiculos";
import injectContext from "./store/appContext";
import { Personajes } from "./views/Personajes";
import { Planetas } from "./views/Planetas";
import { Vehiculos } from "./views/Vehiculos";
import { Favoritos } from "./views/Favoritos";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Personajes">
							<Personajes />
						</Route>
						<Route exact path="/Planetas">
							<Planetas />
						</Route>
						<Route exact path="/Vehiculos">
							<Vehiculos />
						</Route>
						<Route exact path="/Favoritos">
							<Favoritos />
						</Route>
						<Route exact path="/DetallePersonaje/:theid">
							<SinglePersonaje />
						</Route>
						<Route exact path="/DetallePlaneta/:theid">
							<SinglePlaneta />
						</Route>
						<Route exact path="/DetalleVehiculo/:theid">
							<SingleVehiculo />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
