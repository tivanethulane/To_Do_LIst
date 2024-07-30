import React, { useState } from 'react';

function TodoList({ todos, removeTodo, assignTodo }) {
  const [showEmails, setShowEmails] = useState(null);

  const handleAssignClick = (index) => {
    setShowEmails(index);
  };

  return (
    <div className="todo-list-container">
      {todos.map((todo, index) => (
        <div className="todo" key={index}>
          {todo.text}
          <div className="buttons">
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => handleAssignClick(index)}>Assign</button>
          </div>
          {showEmails === index && (
            <EmailList assignTodo={(email) => {
              assignTodo(index, email);
              setShowEmails(null);
            }} />
          )}
        </div>
      ))}
    </div>
  );
}

function EmailList({ assignTodo }) {
  const [emails] = useState(['thulanetivane6@gmail.com', 'example2@example.com']); // Replace with your email list

  return (
    <div className="email-list">
      {emails.map((email, index) => (
        <div key={index}>
          <button onClick={() => assignTodo(email)}>{email}</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
