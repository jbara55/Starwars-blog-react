import React, { useContext } from "react";
import { CardFavoritos } from "../component/CardFavoritos";
import { Context } from "../store/appContext";

export const Favoritos = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="text-center">Tus Favoritos</h1>
			<CardFavoritos />
		</div>
	);
};
