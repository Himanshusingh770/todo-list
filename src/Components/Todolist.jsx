import React, { useState } from 'react';
import todosData from './todosData.json';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo'; // Import the new AddTodo component

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

  // Add a new todo to the list
  const addTodo = (task) => {
    const newTask = {
      id: todos.length + 1, // generate a new id
      task: task,
      completed: false
    };

    setTodos([...todos, newTask]); // Add new todo to the list
  };

  // Update a todo task
  const handleUpdate = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleCheck={handleCheck} handleUpdate={handleUpdate} />
        ))}
      </ul>

      {/* Add Todo Section */}
      <AddTodo addTodo={addTodo} /> {/* Import the AddTodo component */}
    </div>
  );
};

export default Todolist;
