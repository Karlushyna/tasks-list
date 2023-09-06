import React, { useState } from 'react';
import './ToDoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState(["Buy groceries", "Clean the house", "Walk the dog"]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setSelectedItemIndex(null);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-wrapper">
        <h2>To-Do List</h2>
        {todos.length === 0 ? <p>No to-dos available.</p> : (
          todos.map((todo, index) => (
            <div
              className={`todo-item ${index === selectedItemIndex ? "active" : ""}`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="add-todo-wrapper">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add New Todo"
        />
        <button onClick={handleAddTodo}>Add </button>
      </div>
    </div>
  );
};

export default TodoList;

