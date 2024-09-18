import React, { useState, useEffect } from 'react';

const AddTodo = ({ addOrUpdateTodo, editTodo, cancelEdit }) => {
  const [newTodo, setNewTodo] = useState('');
  const [inputError, setInputError] = useState(false);

  // Effect to load the todo to be edited into the input field
  useEffect(() => {
    if (editTodo) {
      setNewTodo(editTodo.task); // Pre-fill the input with the selected task
      setInputError(false); // Clear the error when starting to edit
    } else {
      setNewTodo(''); // Clear the input field if there's no todo to edit
    }
  }, [editTodo]);

  // Handle input change
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
    if (e.target.value.trim() !== '') {
      setInputError(false); // Clear error if the input is not empty
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      setInputError(true); // Set error if input is empty
      return;
    }

    addOrUpdateTodo(newTodo); // Add or update the todo
    setNewTodo(''); // Clear input field after adding/updating
  };

  // Cancel edit mode and reset error
  const handleCancel = () => {
    setInputError(false); // Clear the error when canceling the edit
    setNewTodo(''); // Clear the input field
    cancelEdit(); // Call the cancel function passed down from parent
  };

  return (
    <div className="mt-4">
      <h3>{editTodo ? 'Edit Todo' : 'Add Todo'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-control ${inputError ? 'is-invalid' : ''}`}
          placeholder="Your Todo..."
          value={newTodo}
          onChange={handleInputChange}
        />
        {inputError && <div className="invalid-feedback">Task cannot be empty</div>}
        <div className="mt-2">
          <button type="submit" className="btn btn-primary me-2">
            {editTodo ? 'Save Changes' : 'Submit'}
          </button>
          {editTodo && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel} // Call the cancel function when clicked
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
