import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "./dropdown";

export const Navbar = () => {

	
	const {store} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-starwars  ">
			<Link to="/">
				<div className="navbar-brand starswars-nav m-0"> <i className="swg swg-starwars swg-6x m-0 "></i></div>
			</Link>		
			<span className="databank"> DATA-BANK</span>
			<div className="ml-auto">
			<Dropdown list={store.favorites}/>
			</div>
		</nav>
	);
};
