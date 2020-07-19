import React, { useContext } from 'react';
import { TasksContext } from '../../Contexts/tasksContext';

const Task = ({ task }) => {
  const { delTask, findItem } = useContext(TasksContext);

  return (
    <li>
      <span onClick={() => console.log(task)}>{task.title}</span>
      <div>
        <input
          type='checkbox'
          onChange={(e) =>
            e.target.value ? (task.completed = !task.completed) : task
          }
        />
        <button onClick={() => delTask(task.id)}>X</button>
        <button onClick={() => findItem(task.id)}>Edit</button>
      </div>
    </li>
  );
};

export default Task;
