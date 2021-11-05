import React, { useState } from 'react';
import '../styles/home-styles.css';
import AddTasks from './AddTasks';
import Tasks from './Tasks';

function Home() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    const newTask = {
      id: new Date().getTime(),
      text: task,
      status: 'pendente',
    };

    setTasks([...tasks].concat(newTask));
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (idTask, taskEdited, statusEdited) => {
    // Faço a cópia do meu estado
    const copyTasks = tasks;

    // Encontro a tarefa a ser editada
    const findTask = copyTasks.find((task) => task.id === idTask);

    // Encontro o índice da tarefa
    const findIndex = tasks.indexOf(findTask);

    // Atualizado de fato a tarefa
    findTask.status = statusEdited;
    findTask.text = taskEdited;

    // Na posição do índice da minha tarefa a ser atualizada,
    // é deletado a antiga tarefa e adicionado a nova
    copyTasks.splice(findIndex, 1, findTask);

    // Seto o estado com a tarefa atualizada
    setTasks(copyTasks);
  };

  return (
    <section>
      <AddTasks create={createTask} />
      <Tasks
        data={tasks}
        remove={removeTask}
        update={updateTask}
      />
    </section>
  );
}

export default Home;
