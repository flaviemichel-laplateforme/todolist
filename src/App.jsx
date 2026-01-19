import { useState } from 'react';

import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const ajouterTodo = (text) => {

    const nouveauTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    const nouvelleListe = [...todos, nouveauTodo];
    setTodos(nouvelleListe);

    console.log("Liste mise à jour:", nouvelleListe);
  };

  console.log("Etat actuel (todos) :", todos);

  return (
    <div className='App'>
      <h1>Ma TodoList</h1>
      <TodoForm onAjouter={ajouterTodo} />

      {/* Petit affichage pour t'aider à visualiser sans la console */}

      <ul>
        {todos.map(t => (
          <li key={t.id}>{t.text} (ID: {t.id})</li>
        ))}
      </ul>
    </div>
  );

}

export default App;