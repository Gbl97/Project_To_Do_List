import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/tasks-styles.css';

function Tasks({ data, remove, update }) {
  const [idTask, getIdTasks] = useState(null);
  const [taskEdited, setTaskEdited] = useState('');
  const [statusEdited, setStatusEdited] = useState('');

  const handleTaskEdited = (e) => {
    const { value } = e.target;
    setTaskEdited(value);
  };

  const handleStatusEdited = (e) => {
    const { value } = e.target;
    setStatusEdited(value);
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    if (taskEdited.length > 0 && statusEdited.length > 0) {
      update(id, taskEdited, statusEdited);
    }
    getIdTasks(null);
    setStatusEdited('');
    setTaskEdited('');
  };

  const ternaryCoditionText = (task) => {
    if (task.id === idTask) {
      return (
        <>
          <input type="text" placeholder="Edite sua tarefa" onChange={(e) => handleTaskEdited(e)} />
          <input type="text" placeholder="Edite seu status" onChange={(e) => handleStatusEdited(e)} />
        </>
      );
    }
    return (
      <>
        <p>{`${task.text} - Status: ${task.status}`}</p>
      </>
    );
  };

  const ternaryCoditionBtn = (task) => {
    if (task.id === idTask) {
      return (
        <>
          <button className="button btn-edit" type="button" onClick={(e) => handleSubmit(e, task.id)}>Submter Edições</button>
        </>
      );
    }
    return (
      <>
        <button className="button btn-edit" type="button" onClick={() => getIdTasks(task.id)}>Editar</button>
      </>
    );
  };

  return (
    <>
      { data.map((task) => (
        <div className="task-container" key={task.id}>
          <div className="task-text">
            { ternaryCoditionText(task) }
          </div>
          <div className="task-btn">
            { ternaryCoditionBtn(task) }
            <button className="button btn-delete" type="button" onClick={() => remove(task.id)}>Deletar</button>
          </div>
        </div>
      ))}
    </>
  );
}

Tasks.propTypes = {
  data: PropTypes.object,
  remove: PropTypes.func,
  update: PropTypes.func,
}.isRequired;
export default Tasks;
