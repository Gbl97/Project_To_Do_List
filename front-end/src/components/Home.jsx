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

  return (
    <section>
      <AddTasks create={createTask} />
      <Tasks data={tasks} />
    </section>
  );
}

export default Home;
