import React, { useState } from 'react';
import todosData from './todosData.json';
import TodoItem from './TodoItem';

const Todolist = () => {
  // Use state to manage the todos
  const [todos, setTodos] = useState(todosData);

  // Handle the checkbox change event to mark tasks as completed
  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleCheck={handleCheck} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
