import React, { useActionState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-secundary dropdown-toggle"
					type="button"
					id="favorite-dropdown"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites({store.favoritos.length})
				</button>
				<ul className="dropdown-favoritos-añadidos">
					{store.favoritos.length > 0 ? (
						store.favoritos.map((favoritos, index) => (
							<li key={index}>
								<span className="dropdown-item">
									{favoritos.name} - {favoritos.type}
								</span>
								<button className="boton-borrar" onClick={() => actions.borrarFavorito(favoritos.uid, favoritos.type)}>X</button>
							</li>
						))
					) : (
						<li>
							<span className="dropdown-item">
								no hay favoritos añadidos
							</span>
						</li>
					)
					}
				</ul>
			</div>
		</nav>
	);
};
