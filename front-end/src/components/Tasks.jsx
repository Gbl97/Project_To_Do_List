import React from 'react';
import PropTypes from 'prop-types';
import '../styles/tasks-styles.css';

function Tasks({ data }) {
  return (
    <>
      { data.map((task) => (
        <div className="task-container" key={task.id}>
          <p>{`${task.text} - Status: ${task.status}`}</p>
        </div>
      ))}
    </>
  );
}

Tasks.propTypes = {
  data: PropTypes.object,
}.isRequired;
export default Tasks;
