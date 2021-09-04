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
						<li>
							El tipo de modelo:
							{store.Vehicle.model}
						</li>
						<li>
							La clase del vehiculo es:
							{store.Vehicle.vehicle_class}
						</li>
						<li>
							El fabricante del vehiculo es:
							{store.Vehicle.manufacturer}
						</li>
						<li>
							El valor del vehiculo es:
							{store.Vehicle.cost_in_credits} creditos
						</li>
						<li>
							El largo del vehiculo es:
							{store.Vehicle.length}
						</li>
						<li>
							El numero de tripulantes es:
							{store.Vehicle.crew}
						</li>
						<li>
							El numero de pasajeros es:
							{store.Vehicle.passengers}
						</li>
						<li>
							La capacidad de carga del vehiculo es:
							{store.Vehicle.cargo_capacity}
						</li>
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
