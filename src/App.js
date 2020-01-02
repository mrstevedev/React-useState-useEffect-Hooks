import React, { useState, useEffect} from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return(
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      { todo.text }
      <div className="bottom-buttons">
        <button className="complete-button" onClick={() => completeTodo(index)}>Complete</button>
        <button className="remove-button" onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="input" 
        type="text" 
        value={value} 
        placeholder="What Do I Need To Do?"
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [ todos, setTodos ] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Learn about JavaScript Generators',
      isCompleted: false
    },
    {
      text: 'Make commits to Nodejs App',
      isCompleted: false
    },
  ]);

  useEffect(() => {
    console.log('//-------useEffect Hook Ran');
  })
  

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}



export default App;
