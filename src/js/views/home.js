import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="text-center mt-5 col-md-4">
					<div className="card" style={{ width: "18rem" }}>
						<img src="../../img/personaje 1.jpeg" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Personajes
							</a>
						</div>
					</div>
				</div>
				<div className="text-center mt-5 col-md-4">
					<div className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Planetas
							</a>
						</div>
					</div>
				</div>
				<div className="text-center mt-5 col-md-4">
					<div className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Vehiculos
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
