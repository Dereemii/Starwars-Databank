import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-starwars  ">
			<Link to="/">
				<div className="navbar-brand starswars-nav m-0"> <i className="swg swg-starwars swg-6x m-0 "></i></div>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="./" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Favoritos
  						</a>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<a className="dropdown-item" href="./">Favoritos</a>
						</div>
					</div>
			</div>
		</nav>
	);
};
