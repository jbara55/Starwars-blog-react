import React, { useContext } from "react";
import { CardVehiculos } from "../component/CardVehiculos";
import { Context } from "../store/appContext";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="text-center">Vehiculos</h1>
			<CardVehiculos />
		</div>
	);
};
