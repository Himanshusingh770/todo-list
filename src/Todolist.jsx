import React, { useState } from 'react';


const Todolist = () => {
  // Hardcoded JSON data
  const todosData = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Walk the dog', completed: true },
    { id: 3, task: 'Finish React project', completed: false }
  ];

  // Use state to manage the todos
  const [todos, setTodos] = useState(todosData);

  // Handle the checkbox change event to mark tasks as completed
  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheck(todo.id)}
                className="me-2"
              />
              {todo.task}
            </div>
            {todo.completed && (
              <span className="badge bg-success">Completed</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
