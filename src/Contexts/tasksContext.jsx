import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TasksContext = createContext({
  tasks: [],
  completed: () => {},
  delTask: () => {},
  addTask: () => {},
  editTask: () => {},
});

const TaskContextProvider = (props) => {
  const INITIAL_STATE = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(INITIAL_STATE);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        delTask,
        addTask,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TaskContextProvider;
