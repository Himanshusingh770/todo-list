import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [isValid, setIsValid] = useState(true); // State to track validity

  // Handle input change for the new todo
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
    setIsValid(true); // Reset the validity when the user types
  };

  // Handle form submission to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      setIsValid(false); // Mark as invalid if input is empty
      return;
    }

    addTodo(newTodo); // Call the parent function to add the new todo
    setNewTodo(''); // Clear the input field after adding
    setIsValid(true); // Reset the validity
  };

  return (
    <div className="mt-4">
      <h3>Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-control ${!isValid ? 'is-invalid' : ''}`} // Apply 'is-invalid' class when not valid
          placeholder="Your Todo..."
          value={newTodo}
          onChange={handleInputChange}
        />
        {!isValid && (
          <div className="text-danger mt-1">Todo cannot be empty</div>
        )}
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
