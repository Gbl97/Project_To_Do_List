import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import App from '../App';

describe('Verificando se os elementos estão na tela', () => {
  test('Verificando se a aplicação possui um título', () => {
    render(<App />);
    const message = 'To Do List';
    const title = screen.getByText(message);
    expect(title).toBeInTheDocument();
  });

  test('Verificando se existe o campo de digitar a tarefa', () => {
    render(<App />);
    const idMessage = 'input-test';
    const inputTask = screen.getByTestId(idMessage);
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando se existe um botão para criar a tarefa', () => {
    render(<App />);
    const message = 'Adicionar Tarefa';
    const btnMessage = screen.getByText(message);
    expect(btnMessage).toBeInTheDocument();
  });
});

// describe('', () => {});
