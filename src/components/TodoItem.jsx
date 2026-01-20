import React from "react";

function TodoItem({ todo, onToggle, onSupprimer }) {
    return (
        <li className="todo-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>

            <button onClick={() => onSupprimer(todo.id)} style={{ marginLeft: 'auto' }}>
                Supprimer
            </button>
        </li>
    );
}

export default TodoItem;