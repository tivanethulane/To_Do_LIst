import React from 'react';

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          className="todo"
          key={index}
        >
          {todo.text}
          <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;