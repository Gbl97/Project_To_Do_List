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

  return (
    <section>
      <AddTasks create={createTask} />
      <Tasks
        data={tasks}
        remove={removeTask}
      />
    </section>
  );
}

export default Home;
