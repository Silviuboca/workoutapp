import React, { useState } from 'react';

const AddTask = (props) => {
  const [task, setTask] = useState({ title: '' });

  const handleChange = (e) => setTask({ [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTask(task.title);
    setTask({ title: '' });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Add a Task...'
        onChange={handleChange}
        value={task.title}
      />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default AddTask;
