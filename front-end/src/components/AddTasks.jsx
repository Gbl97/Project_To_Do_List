import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/addTasks-styles.css';

function AddTasks({ create }) {
  // const initialTitle = '';
  const [titleTask, setTitle] = useState('');
  const valueTask = useRef();

  const handleInput = () => {
    const { value } = valueTask.current;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleTask.length > 0) {
      create(titleTask);
      setTitle(valueTask.current.value = '');
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            data-testid="input-test"
            type="text"
            placeholder="Digite aqui sua tarefa"
            ref={valueTask}
            onChange={handleInput}
          />
          <button
            data-testid="form-btn"
            type="submit"
          >
            Adicionar Tarefa
          </button>
        </form>
      </div>
    </>
  );
}

AddTasks.propTypes = {
  create: PropTypes.func,
}.isRequired;

export default AddTasks;
