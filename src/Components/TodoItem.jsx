import React from 'react';
import { BsPencilSquare } from "react-icons/bs";

const TodoItem = ({ todo, handleCheck, handleEdit }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
          className="me-2"
        />
        <span>{todo.task}</span>
      </div>

      <div>
        <button onClick={() => handleEdit(todo)} className="btn btn-light btn-sm ms-3">
          <BsPencilSquare style={{ fontSize: '1.2rem' }} />
        </button>
        {todo.completed && <span className="badge bg-success ms-3">Completed</span>}
      </div>
    </li>
  );
};

export default TodoItem;
