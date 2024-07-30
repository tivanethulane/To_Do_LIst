import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID (Public Key)
emailjs.init('c1x8-2Sqnro0_Rj_M'); // Initialize once, usually in index.js or App.js

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const assignTodo = (index, email) => {
    const task = todos[index].text;
    console.log(`Assign task: ${task} to ${email}`);

    const templateParams = {
      to_email: email,
      task: task
    };

    emailjs.send('service_sczfnym', 'template_dylps4v', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} assignTodo={assignTodo} />
    </div>
  );
}

export default App;
