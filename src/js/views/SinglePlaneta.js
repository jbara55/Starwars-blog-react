import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlaneta = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getPlanet(theid);
	});

	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">{store.Planet.name}</h5>
				<p className="card-text">
					<ul>
						<li>
							El diametro del planeta es:
							{store.Planet.diameter}
						</li>
						<li>
							El tiempo de rotación del planeta es:
							{store.Planet.rotation_period}
						</li>
						<li>
							El tiempo de traslación del planeta es:
							{store.Planet.orbital_period}
						</li>
						<li>
							la gravedad del planeta es:
							{store.Planet.gravity}
						</li>
						<li>
							La poblacion del planeta es:
							{store.Planet.population}
						</li>
						<li>
							El clima del planeta es:
							{store.Planet.climate}
						</li>
						<li>
							El terreno del Planet es:
							{store.Planet.terrain}
						</li>
					</ul>
				</p>
				<Link to="/">
					<span className="btn btn-primary btn" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

SinglePlaneta.propTypes = {
	match: PropTypes.object
};
