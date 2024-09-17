import React, { useState } from 'react';

const TodoItem = ({ todo, handleCheck, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [editedTask, setEditedTask] = useState(todo.task); // State to track edited task

  // Handle input change in edit mode
  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  // Handle form submission to save the updated task
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(todo.id, editedTask); // Call parent function to update the todo
    setIsEditing(false); // Exit edit mode
  };

  // Toggle between edit and view mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
          className="me-2"
        />

        {isEditing ? (
          // Show input field if in edit mode
          <form onSubmit={handleSubmit} className="d-inline">
            <input
              type="text"
              className="form-control d-inline w-75 me-2"
              value={editedTask}
              onChange={handleInputChange}
              autoFocus
            />
            <button type="submit" className="btn btn-success btn-sm mt-2">
              Save
            </button>
          </form>
        ) : (
          // Show task text if not in edit mode
          <span>{todo.task}</span>
        )}
      </div>

      <div>
        {!isEditing && (
          <button onClick={toggleEditMode} className="btn btn-warning btn-sm me-2">
            Edit
          </button>
        )}
        {todo.completed && <span className="badge bg-success">Completed</span>}
      </div>
    </li>
  );
};

export default TodoItem;
