import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/appContext";

import { Navbar } from "./js/component/navbar";
import Characters  from "./js/views/characters"
import Character from "./js/views/character";


//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Characters} />
						<Route exact path="/character/:id" component={Character} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
