import React, { useContext } from 'react';
import { TasksContext } from '../../Contexts/tasksContext';
import Task from './Task';

const TaskItems = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div>
      <span>
        {tasks.length ? (
          <ul>
            {tasks.map((task) => {
              return <Task task={task} key={task.id} />;
            })}
          </ul>
        ) : (
          <div>No Tasks</div>
        )}
      </span>
    </div>
  );
};

export default TaskItems;
