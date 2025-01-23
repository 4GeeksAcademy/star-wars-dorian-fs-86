import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/item-card";


export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadingdata();
	}, []);

	const HandleFavorite = (id) => {
		actions.añadirfavoritos(id)
	};
	
	return (
		<div className="container">
			<h1 className="text-center">Star Wars Characters</h1>
			<div className="row">
				{store.character && store.character.length > 0 ? (
					store.character.map((character, index) => {
						return (
							<div className="col-md-4" key={index}>
								<ItemCard
								 name={character.name}
								 id={character.uid}
								 inFavorite={HandleFavorite}
								  />
							</div>
						);
					})
				) : (
					<p>Loading...</p>
				)}
			</div>
			<h1 className="text-center">Star Wars Naves</h1>
			<div className="row">
				{store.naves && store.naves.length > 0 ? (
					store.naves.map((naves, index) => {
						return (
							<div className="col-md-4" key={index}>
								<ItemCard 
								name={naves.name}
								id={naves.uid}
								inFavorite={HandleFavorite}
								  />
							</div>
						);
					})
				) : (
					<p>Loading...</p>
				)}
			</div>
			<h1 className="text-center">Star Wars Planets</h1>
			<div className="row">
				{store.planets && store.planets.length > 0 ? (
					store.planets.map((planets, index) => {
						return (
							<div className="col-md-4" key={index}>
								<ItemCard 
								name={planets.name}
								id={planets.uid}
								inFavorite={HandleFavorite}
								 />
							</div>
						);
					})
				) : (
					<p>Loading...</p>
				)}
			</div>

		</div>
	);
};









