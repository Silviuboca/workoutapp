import React, { useState, useContext, useEffect } from 'react';
import { TasksContext } from '../../Contexts/tasksContext';

const TaskForm = () => {
  const { addTask, editTask, editItem } = useContext(TasksContext);
  const [title, setTitle] = useState([{ id: '', title: '', completed: false }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Today's priorities..."
        value={title}
        onChange={handleChange}
        required
      />
      <div>
        <button type='submit'>{editItem ? 'Edit Task' : 'Add Task'} </button>
      </div>
    </form>
  );
};

export default TaskForm;
