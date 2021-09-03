import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPlanetas } from "../component/CardPlanetas";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="text-center">Planetas</h1>
			<CardPlanetas />
		</div>
	);
};
