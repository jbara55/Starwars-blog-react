import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src="" alt="" width="30" height="24" />
				</a>

				<a className="nav-item">
					<Link to="/">
						<a className="nav-link active" href="#">
							Home
						</a>
					</Link>
				</a>
				<a className="nav-item">
					<Link to="/Personajes">
						<a className="nav-link active" href="#">
							Personajes
						</a>
					</Link>
				</a>
				<a className="nav-item">
					<Link to="/Planetas">
						<a className="nav-link active" href="#">
							Planetas
						</a>
					</Link>
				</a>
				<a className="nav-item">
					<Link to="/Vehiculos">
						<a className="nav-link active" href="#">
							Vehiculos
						</a>
					</Link>
				</a>
				<a className="nav-item">
					<Link to="/favoritos">
						<a className="nav-link active" href="#">
							Favoritos
						</a>
					</Link>
				</a>
			</div>
		</nav>
	);
};

/*

<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
*/
