import React, { useState, useEffect } from 'react';
import TaskItem from './taskItems';
import AddTask from './addTask';
import Modular from '../../components/Modular/Modular';
import Workouts from '../Workouts/workouts';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 0, title: 'Workout', completed: false, readOnly: true },
    { id: 1, title: 'Workout2', completed: false },
    { id: 2, title: 'Workout3', completed: false },
  ]);

  const [display, setDisplay] = useState(false);

  const editButton = (id, newTitle) => {
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

  const delTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const addTask = (title) => {
    setTasks((prev) => {
      return [...prev, { id: null, title: title, completed: false }];
    });
  };

  const showModular = () => {
    setDisplay((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <h1>Tasks To Do</h1>
      {tasks.map((task, i) => {
        return (
          <TaskItem
            key={i}
            task={task}
            check={check}
            delTask={delTask}
            editButton={editButton}
            showModular={showModular}
          />
        );
      })}
      <AddTask addTask={addTask} />

      {display && (
        <Modular showModular={showModular}>
          <Workouts />
        </Modular>
      )}
    </div>
  );
};

export default Tasks;
