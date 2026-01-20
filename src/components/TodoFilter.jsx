import React from "react";
import './TodoFilter.css';

function TodoFilter({ filtre, setFiltre }) {
    return (
        <div className="filtres" style={{ marginBottom: '20px' }}>

            <button
                className={filtre === 'toutes' ? 'actif' : ''}
                onClick={() => setFiltre('toutes')}
            >
                Toutes
            </button>

            <button
                className={filtre === 'actives' ? 'actif' : ''}
                onClick={() => setFiltre('actives')}
            >
                Actives
            </button>

            <button
                className={filtre === 'terminees' ? 'actif' : ''}
                onClick={() => setFiltre('terminees')}
            >
                Terminées
            </button>


        </div>
    )
}
export default TodoFilter;