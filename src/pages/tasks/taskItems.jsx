import React, { useState } from 'react';

const TaskItem = (props) => {
  const { id, title } = props.task;

  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleCheck = () => {
    props.check(id);
  };

  const handleDelete = () => {
    props.delTask(id);
  };

  const handleEdit = (e) => {
    setUpdatedTitle(e.target.value);
    props.editButton(id, e.target.value);
  };

  return (
    <div>
      <span>
        <input type='checkbox' onChange={handleCheck} />
        <input value={updatedTitle} onChange={handleEdit} />
        <button onClick={handleDelete}>x</button>
      </span>
    </div>
  );
};

export default TaskItem;
