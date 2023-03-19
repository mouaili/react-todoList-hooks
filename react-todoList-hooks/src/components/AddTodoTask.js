import React, { useState } from 'react';

const AddTodoTask = ({ addOneTask }) => {
  const [task, setTask] = useState('');
  const [done, setIsDone] = useState(false);

  console.log(task);

  const handleOneTask = e => {
    e.preventDefault();
    if (task !== '') {
      addOneTask(task);
      setTask('');
      setIsDone(false);
      //return;
    } else {
      setIsDone(true);
    }
  };

  const alertMSG = done && (
    <div className="alert alert-danger" role="alert">
      You must add one task if you want to continue!
    </div>
  );

  return (
    <form onSubmit={handleOneTask}>
      <div className="form-group m-5">
        <label className="fw-bold">Add your task the list :</label>
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <input className="btn btn-warning mt-3" type="submit" />
      </div>
      {alertMSG}
    </form>
  );
};

export default AddTodoTask;
