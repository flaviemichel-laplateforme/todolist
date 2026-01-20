import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onSupprimer }) {
    //Si la liste est vide, on affiche un message
    if (todos.length === 0) {
        return <p>Aucune tâche. Ajouter en une !!</p>
    }

    return (
        <ul className="todo-list">
            {/* CORRECTION ICI : on déclare 'todo' dans la parenthèse */}
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}       // Et on utilise 'todo' ici. Ça doit matcher !
                    onToggle={onToggle}
                    onSupprimer={onSupprimer}
                />
            ))}
        </ul>
    );
}

export default TodoList;