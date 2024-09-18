import React, { useState } from 'react';
import todosData from './todosData.json';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [EditTodo, setEditTodo] = useState(null); // Track the todo to be edited

  // Handle checkbox change to mark tasks as completed
  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Add a new todo to the list or update the existing one
  const addOrUpdateTodo = (task) => {
    if (EditTodo) {
      // Update existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === EditTodo.id ? { ...todo, task: task } : todo
      );
      setTodos(updatedTodos);
      setEditTodo(null); // Clear the edit mode
    } else {
      // Add new todo
      const newTask = {
        id: todos.length + 1,
        task: task,
        completed: false,
      };
      setTodos([...todos, newTask]);
    }
  };

  // Set the selected todo for editing
  const handleEdit = (todo) => {
    setEditTodo(todo); // Pass the todo to the AddTodo form
  };

  // Cancel the edit mode
  const cancelEdit = () => {
    setEditTodo(null); // Clear the edit mode and reset the form
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCheck={handleCheck}
            handleEdit={handleEdit}
          />
        ))}
      </ul>

      {/* Add Todo / Edit Todo Section */}
      <AddTodo
        addOrUpdateTodo={addOrUpdateTodo}
        EditTodo={EditTodo}
        cancelEdit={cancelEdit} // Pass the cancel function to the AddTodo component
      />
    </div>
  );
};

export default TodoList;
