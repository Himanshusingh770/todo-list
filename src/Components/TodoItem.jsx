import React, { useState } from 'react';
import { BsPencilSquare } from "react-icons/bs";

const TodoItem = ({ todo, handleCheck, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [editedTask, setEditedTask] = useState(todo.task); // State to track edited task
  const [editError, setEditError] = useState(false); // State to track validation error in edit mode

  // Handle input change in edit mode
  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
    if (e.target.value.trim() !== '') {
      setEditError(false); // Remove error state when input is not empty
    }
  };

  // Handle form submission to save the updated task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTask.trim() === '') {
      setEditError(true); // Set error if input is empty
      return;
    }
    handleUpdate(todo.id, editedTask); // Call parent function to update the todo
    setIsEditing(false); // Exit edit mode
  };

  // Toggle between edit and view mode
  const toggleEditMode = () => {
    setIsEditing(true);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
          className="me-2"
        />

        {isEditing ? (
          // Show input field if in edit mode
          <form onSubmit={handleSubmit} className="d-flex align-items-center w-100">
            <input
              type="text"
              className={`form-control w-75 me-2 ${editError ? 'is-invalid' : ''}`} // Add red border if there's an error
              value={editedTask}
              onChange={handleInputChange}
              autoFocus
            />
            <button type="submit" className="btn btn-success btn-sm" style={{ marginTop: '0.5rem' }}>
              Save
            </button>
            {editError && (
              <div className="invalid-feedback d-inline ms-2">Task cannot be empty</div>
            )}
          </form>
        ) : (
          // Show task text if not in edit mode
          <span>{todo.task}</span>
        )}
      </div>

      <div className="d-flex align-items-center">
        {!isEditing && (
          <button onClick={toggleEditMode} className="btn btn-light btn-sm ms-3">
            <BsPencilSquare style={{ fontSize: '1.2rem' }} />
          </button>
        )}
        {todo.completed && <span className="badge bg-success ms-3">Completed</span>}
      </div>
    </li>
  );
};

export default TodoItem;
