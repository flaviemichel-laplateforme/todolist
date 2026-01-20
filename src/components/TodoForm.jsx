import React, { useState } from "react";

function TodoForm({ onAjouter }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") {
            return;
        }

        //Appelle la fonction du parent avec le texte
        onAjouter(inputValue);

        //Vide l'input pour la preochaine tâche
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ajouter une nouvelle tâche..."
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TodoForm;