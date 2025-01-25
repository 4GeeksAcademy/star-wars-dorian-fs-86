import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/item-card";


export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadingdata();
	}, []);
	const handleFavorite = (item) => {
		actions.añadirFavoritos(item);
	};
	
	return (
		<div className="container">
			<h1 className="text-center">Star Wars Characters</h1>
			<div className="row">
				{store.character.length > 0 ? (
					store.character.map((character) => (
						<div className="col-md-4" key={character.uid}>
							<ItemCard
								name={character.name}
								id={character.uid}
								type="character"
								inFavorite={() =>
									handleFavorite({
										uid: character.uid,
										name: character.name,
										type: "character",
									})
								}
							/>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
			<h1 className="text-center">Star Wars Naves</h1>
			<div className="row">
				{store.naves.length > 0 ? (
					store.naves.map((nave) => (
						<div className="col-md-4" key={nave.uid}>
							<ItemCard
								name={nave.name}
								id={nave.uid}
								type="naves"
								inFavorite={() =>
									handleFavorite({
										uid: nave.uid,
										name: nave.name,
										type: "naves",
									})
								}
							/>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
			<h1 className="text-center">Star Wars Planets</h1>
			<div className="row">
				{store.planets.length > 0 ? (
					store.planets.map((planet) => (
						<div className="col-md-4" key={planet.uid}>
							<ItemCard
								name={planet.name}
								id={planet.uid}
								type="planets"
								inFavorite={() =>
									handleFavorite({
										uid: planet.uid,
										name: planet.name,
										type: "planets",
									})
								}
							/>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
};