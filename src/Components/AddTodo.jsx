import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(false); // State to track validation error

  // Handle input change for the new todo
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
    if (e.target.value.trim() !== '') {
      setError(false); // Remove error state when input is not empty
    }
  };

  // Handle form submission to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      setError(true); // Set error if input is empty
      return;
    }

    addTodo(newTodo); // Call the parent function to add the new todo
    setNewTodo(''); // Clear the input field after adding
  };

  return (
    <div className="mt-4">
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`} // Add red border if there's an error
          placeholder="Your Todo..."
          value={newTodo}
          onChange={handleInputChange}
        />
        {error && <div className="invalid-feedback">Todo cannot be empty</div>} {/* Error message */}
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
