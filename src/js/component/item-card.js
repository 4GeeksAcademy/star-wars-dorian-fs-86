import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ItemCard = ({ name, inFavorite, type, id }) => {

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="title">{name || "No Name Provided"}</h1>
                <div className="botones">
                    <button className="favorites"
                        onClick={inFavorite}>❤️</button>
                    <Link to={`/single/${type}/${id}/`}>
                        <button>
                            learn more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
ItemCard.propTypes = {
    name: PropTypes.string.isRequired,
};

