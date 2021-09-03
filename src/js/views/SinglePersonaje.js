import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePersonaje = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getPeople(theid);
	});
	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">{store.People.name}</h5>
				<p className="card-text">
					<ul>
						<li>
							Su altura es de:
							{store.People.height} Cm
						</li>
						<li>
							Su peso es de:
							{store.People.mass} kg
						</li>
						<li>
							Su color de pelo es:
							{store.People.hair_color}
						</li>
						<li>
							Su color de piel es:
							{store.People.skin_color}
						</li>
						<li>
							Su color de Ojos es:
							{store.People.eye_color}
						</li>
						<li>
							Su año de naciemiento es:
							{store.People.birth_year}
						</li>
						<li>
							Su genero es:
							{store.People.gender}
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

SinglePersonaje.propTypes = {
	match: PropTypes.object
};
