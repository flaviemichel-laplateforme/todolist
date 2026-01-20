import { useState } from 'react';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

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


  };

  const toggleTodo = (id) => {
    console.log("Toggle todo:", id);
  };

  const supprimerTodo = (id) => {
    console.log("Supprimer todo:", id);
  };



  return (
    <div className='App'>
      <h1>Ma TodoList</h1>
      <TodoForm onAjouter={ajouterTodo} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onSupprimer={supprimerTodo}
      />
    </div>
  );

}

export default App;