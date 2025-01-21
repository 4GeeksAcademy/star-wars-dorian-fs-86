import React from "react";
import PropTypes from "prop-types";

export const ItemCard = ({ name, id, inFavorite }) => {

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="title">{name || "No Name Provided"}</h1>
                <div className="botones">
                    <button className="favorites" onClick={() => {inFavorite(id)}}>❤️</button>
                    <button className="learn-more">learn more</button>
                </div>
            </div>
        </div>
    );
};
ItemCard.propTypes = {
    name: PropTypes.string.isRequired,
};

