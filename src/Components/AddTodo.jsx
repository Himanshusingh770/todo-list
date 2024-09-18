import React, { useState, useEffect } from 'react';

const AddTodo = ({ addOrUpdateTodo, todoToEdit, cancelEdit }) => {
  const [newTodo, setNewTodo] = useState('');
  const [inputError, setInputError] = useState(false);

  // Effect to load the todo to be edited into the input field
  useEffect(() => {
    if (todoToEdit) {
      setNewTodo(todoToEdit.task); // Pre-fill the input with the selected task
      setInputError(false); // Clear the error when starting to edit
    } else {
      setNewTodo(''); // Clear the input field if there's no todo to edit
    }
  }, [todoToEdit]);

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

  return (
    <div className="mt-4">
      <h3>{todoToEdit ? 'Edit Todo' : 'Add Todo'}</h3>
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
            {todoToEdit ? 'Save Changes' : 'Submit'}
          </button>
          {todoToEdit && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cancelEdit} // Call the cancel function when clicked
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
