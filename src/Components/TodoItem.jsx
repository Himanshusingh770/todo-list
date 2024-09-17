import React from 'react';

const TodoItem = ({ todo, handleCheck }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
          className="me-2"
        />
        {todo.task}
      </div>
      {todo.completed && <span className="badge bg-success">Completed</span>}
    </li>
  );
};

export default TodoItem;
