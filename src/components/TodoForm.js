import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      text: value
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="write a task To-Be-Done"
        className='form'
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add </button>
    </form>
  );
}

export default TodoForm;
