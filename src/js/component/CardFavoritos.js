import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardFavoritos = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div>
				<div className="container">
					<div className="row ">
						{store.Favoritos.map((favorito, posicion) => {
							return (
								<div className="card" style={{ width: "18rem" }} key={posicion}>
									<div className="card-body">
										<h5 className="card-title">{favorito}</h5>
										<p className="card-text">Este es Tu Favorito</p>
									</div>
									<button
										type="button"
										className="btn btn-outline-danger mx-3"
										onClick={posicion => {
											actions.removeFavorite(favorito);
										}}>
										Eliminar
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
