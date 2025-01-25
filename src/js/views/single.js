import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = () => {
	const { type, id } = useParams();
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchItemData = async () => {
			try {
				setLoading(true);
				const ajustarType = 
					type === "character" ? "people":
					type === "naves" ? "starships":
					type;
				const response = await fetch(`https://www.swapi.tech/api/${ajustarType}/${id}`)
				if(!response.ok){
					throw new Error(`error http:${response.status}`)
				}
				const data = await response.json();
				if (!data.result || !data.result.properties){
					throw new Error("Datos no esperados");
					}
				setItem(data.result.properties);
				setLoading(false);
			} catch (error) {
				console.log("No se cargaron los datos", error);
				setLoading(false);
			}
		}
		fetchItemData();
	}, [type, id]);
	if (loading) return <p>cargando información</p>


	return (
		<div className="container">
			{item ? (
				<div className="card">
					<div className="card-body">
						<h1>{item.name}</h1>
						{type === "character" && (
							<>
								<p>Altura: {item.height}</p>
								<p>Peso: {item.mass}</p>
								<p>Género: {item.gender}</p>
							</>
						)}
						{type === "planets" && (
							<>
								<p>Clima: {item.climate}</p>
								<p>Terreno: {item.terrain}</p>
								<p>Población: {item.population}</p>
							</>
						)}
						{type === "naves" && (
							<>
								<p>Modelo: {item.model}</p>
								<p>Fabricante: {item.manufacturer}</p>
								<p>Capacidad: {item.cargo_capacity}</p>
							</>
						)}
					</div>
				</div>
			) : (
				<p>No se han encontrado los datos</p>
			)
			}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
