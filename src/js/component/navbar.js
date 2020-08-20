import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "./dropdown";

export const Navbar = () => {

	
	const {store} = useContext(Context);

	return (
		<div>
		<nav className="navbar navbar-light bg-starwars  ">
			<Link to="/">
				<div className="navbar-brand starswars-nav m-0"> <i className="swg swg-starwars swg-6x m-0 "></i></div>
			</Link>		
			<span className="databank"> DATA-BANK</span>
			<div className="ml-auto">
			<Dropdown list={store.favorites}/>
			</div>
		</nav>
			<div className="Links row border border-white">
				<span className="button border-white col-md">
					<Link className="nav-link ml-5"  to="/">
						<h1 className="characters text-white text-center">Characters <i className="swg swg-lightsabers  swg-6x m-0 "></i></h1>
                  	</Link>
				</span>
				<span className="border border-white col-md">
					<Link className="nav-link ml-5"  to="/planets">
						<h1 className="characters text-white text-center">Planets <i className="swg swg-lightsabers  swg-6x m-0 "></i></h1>
                  	</Link>
				</span>
			</div>
		</div>
	);
};
