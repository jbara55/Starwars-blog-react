import React from "react";
import "../../styles/home.scss";
import personaje1 from "../../img/darth1.jpg";
import planeta1 from "../../img/planeta1.jpeg";
import vehiculo1 from "../../img/nave2.png";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="text-center mt-5 col-md-4">
					<div className="card" style={{ width: "18rem" }}>
						<img src={personaje1} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Personajes</h5>
							<p className="card-text">Revisa los personajes de la Saga Star Wars</p>
							<Link to="/personajes">
								<a href="#" className="btn btn-primary">
									Ir
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="text-center mt-5 col-md-4">
					<div className="card" style={{ width: "18rem" }}>
						<img src={planeta1} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Planetas</h5>
							<p className="card-text">Revisa los Planetas de la Saga Star Wars</p>
							<Link to="/planetas">
								<a href="#" className="btn btn-primary">
									Ir
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="text-center mt-5 col-md-4">
					<div className="card" style={{ width: "18rem" }}>
						<img src={vehiculo1} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">vehiculos</h5>
							<p className="card-text">Revisa los Vehiculos de la Saga Star Wars</p>
							<Link to="/vehiculos">
								<a href="#" className="btn btn-primary">
									Ir
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
