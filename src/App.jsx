import { useState } from 'react';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [filtre, setFiltre] = useState('toutes');

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
    const nouvelleListe = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(nouvelleListe);
  };

  const supprimerTodo = (id) => {
    const nouvelleListe = todos.filter(todo => todo.id !== id);
    setTodos(nouvelleListe);
  };

  const getTodosFIltres = () => {
    switch (filtre) {
      case 'actives':
        return todos.filter(t => !t.completed);//Garde celle non terminées
      case 'terminees':
        return todos.filter(t => t.completed);
      default:
        return todos;//Toutes
    }
  };

  const nombreTotal = todos.length;
  const nombresActives = todos.filter(t => !t.completed).length;
  const nombresTerminees = todos.filter(t => t.completed).length;

  return (
    <div className='App'>
      <h1>Ma TodoList</h1>
      <TodoForm onAjouter={ajouterTodo} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onSupprimer={supprimerTodo}
      />

      <div className='stats'>
        <p>Total : {nombreTotal} </p>
        <p>Actives : {nombresActives} </p>
        <p>Terminées : {nombresTerminees} </p>
      </div>
    </div>
  );



}

export default App;