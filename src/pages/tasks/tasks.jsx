import React, { useState, useContext } from 'react';
import TaskItem from './taskItems';
import AddTask from './addTask';
import Modular from '../../components/Modal/Modal';
import Workouts from '../Workouts/workouts';
import { TasksContext } from '../../components/Contexts/tasks.context';
import { ModalContext } from '../../components/Contexts/modal.context';
import Modal from '../../components/Modal/Modal';

const Tasks = () => {
  const { tasks, check, delTask, addTask, editTask } = useContext(TasksContext);

  const [display, setDisplay] = useState(false);

  const { handleModal } = useContext(ModalContext);

  return (
    <div>
      <h1
        onClick={() => {
          handleModal('component component component');
        }}
      >
        Tasks To Do
      </h1>

      {tasks.map((task, i) => {
        return (
          <TaskItem
            key={i}
            task={task}
            check={check}
            delTask={delTask}
            editTask={editTask}
          />
        );
      })}
      <AddTask addTask={addTask} />

      <Modal>
        <Workouts />
      </Modal>
    </div>
  );
};

export default Tasks;
