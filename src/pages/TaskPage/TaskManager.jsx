import React from 'react';
import TaskContextProvider from '../../Contexts/tasksContext';
import TaskItems from './TaskItems';
import TaskForm from './TaskForm';

const TaskManager = () => {
  return (
    <TaskContextProvider>
      <div>
        <div>
          <div>
            <TaskForm />
            <TaskItems />
          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
};

export default TaskManager;
