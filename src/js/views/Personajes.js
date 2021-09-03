import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Cardpersonajes } from "../component/Cardpersonajes";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="text-center">Personajes</h1>
			<Cardpersonajes />
		</div>
	);
};
