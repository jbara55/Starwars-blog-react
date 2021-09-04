import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehiculo = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getVehicle(theid);
	});
	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">{store.Vehicle.name}</h5>
				<p className="card-text">
					<ul>
						<li>{store.Vehicle.model}</li>
						<li>{store.Vehicle.vehicle_class}</li>
						<li>{store.Vehicle.manufacturer}</li>
						<li>{store.Vehicle.cost_in_credits}</li>
						<li>{store.Vehicle.length}</li>
						<li>{store.Vehicle.crew}</li>
						<li>{store.Vehicle.passengers}</li>
						<li>{store.Vehicle.cargo_capacity}</li>
					</ul>
				</p>
				<Link to="/">
					<span className="btn btn-primary btn" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
			∫
		</div>
	);
};

SingleVehiculo.propTypes = {
	match: PropTypes.object
};
