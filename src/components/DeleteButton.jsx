import React from "react";
import './DeleteButton.css';

function DeleteButton({ onClick }) {
    return (
        <button
            className="btn-delete-all"
            onClick={onClick}
        >
            Tout supprimer
        </button>
    );
}

export default DeleteButton;