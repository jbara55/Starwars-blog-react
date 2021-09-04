import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="container">
				<div className="row ">
					{store.allPlanets.map((planeta, posicion) => {
						return (
							<div className="card" style={{ width: "18rem" }} key={posicion}>
								<div className="card-body">
									<h5 className="card-title">{planeta.name}</h5>
									<p className="card-text">
										Haz clic en el botón Detalles, para obtener más información
									</p>
									<Link to={"/detallePlaneta/" + planeta.uid}>
										<button type="button" className="btn btn-outline-success mx-3">
											Ver más
										</button>
									</Link>
									<button
										type="button"
										className="btn btn-outline-info "
										onClick={() => {
											actions.addFavorite(planeta.name);
										}}>
										Favoritos
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
