import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  // Handle input change for the new todo
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Handle form submission to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    addTodo(newTodo); // Call the parent function to add the new todo
    setNewTodo(''); // Clear the input field after adding
  };

  return (
    <div className="mt-4">
      <h3>Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Your Todo..."
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
