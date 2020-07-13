import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TasksContext = createContext({
  tasks: [],
  check: () => {},
  delTask: () => {},
  addTask: () => {},
  editTask: () => {},
});

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 0, title: 'Workout', completed: false, readOnly: true },
  ]);

  const delTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const addTask = (title) => {
    setTasks((prev) => {
      return [...prev, { id: uuidv4(), title: title, completed: false }];
    });
  };

  const editTask = (id, newTitle) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          task.title = newTitle;
        }
        return task;
      });
    });
  };

  const check = (id) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
    });
  };

  return (
    <TasksContext.Provider value={{ tasks, check, delTask, addTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
