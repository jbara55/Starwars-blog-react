import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardpersonajes = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="container">
				<div className="row ">
					{store.allPeople.map((persona, posicion) => {
						return (
							<div className="card" style={{ width: "18rem" }} key={posicion}>
								<div className="card-body">
									<h5 className="card-title">{persona.name}</h5>
									<p className="card-text">
										Haz clic en el botón Ver más, para obtener más información
									</p>
									<Link to={"/detallePersonaje/" + persona.uid}>
										<button type="button" className="btn btn-outline-success mx-3">
											Ver más
										</button>
									</Link>
									<button
										type="button"
										className="btn btn-outline-info "
										onClick={() => {
											actions.addFavorite(persona.name);
											console.log(store.Favoritos);
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
