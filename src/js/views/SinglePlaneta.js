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
						<li>{store.Planet.diameter}</li>
						<li>{store.Planet.rotation_period}</li>
						<li>{store.Planet.orbital_period}</li>
						<li>{store.Planet.gravity}</li>
						<li>{store.Planet.population}</li>
						<li>{store.Planet.climate}</li>
						<li>{store.Planet.terrain}</li>
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
