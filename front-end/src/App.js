import React from 'react';
import './styles/main-styles.css';
import Header from './components/Header';
import Home from './components/Home';

// Referências usadas para este desafio técnico:
// React para iniciantes: To Do List (https://www.youtube.com/watch?v=e3hL0eMcFW4&list=WL&index=4&ab_channel=Otimic)
// Ultimate React To Do List: (https://www.code-boost.com/video/ultimate-react-todo-list/#app-css-styles-code)
// Estilização dos botões: (https://www.visualdicas.com.br/programacao/css/12-criando-botoes-personalizados-css)

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
