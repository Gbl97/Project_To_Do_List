import React from 'react';
import PropTypes from 'prop-types';
import '../styles/tasks-styles.css';

function Tasks({ data, remove }) {
  return (
    <>
      { data.map((task) => (
        <div className="task-container" key={task.id}>
          <div className="task-text">
            <p>{`${task.text} - Status: ${task.status}`}</p>
          </div>
          <div className="task-btn">
            <button type="button" onClick={() => remove(task.id)}>Deletar</button>
          </div>
        </div>
      ))}
    </>
  );
}

Tasks.propTypes = {
  data: PropTypes.object,
  remove: PropTypes.func,
}.isRequired;
export default Tasks;
