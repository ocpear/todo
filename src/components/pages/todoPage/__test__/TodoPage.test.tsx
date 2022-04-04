import { render, screen, fireEvent } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import { VIEW_MODE } from '../../../../constants';
import TodoPage from '../TodoPage';

//add 3 todo
const prepareData = () => {

  render(<AppWrapper>
    <TodoPage />
  </AppWrapper>);

  const inputElement = screen.getByTestId('todoInput');

  fireEvent.change(inputElement, { target: { value: 'Todo0' } });
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
  let element = screen.getByText(/Todo0/i);
  expect(element).toBeInTheDocument();
  let allTodo = screen.getAllByTestId('todo');
  expect(allTodo.length).toBe(1);

  fireEvent.change(inputElement, { target: { value: 'Todo1' } });
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
  element = screen.getByText(/Todo1/i);
  expect(element).toBeInTheDocument();
  allTodo = screen.getAllByTestId('todo');
  expect(allTodo.length).toBe(2);

  fireEvent.change(inputElement, { target: { value: 'Todo2' } });
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
  element = screen.getByText(/Todo2/i);
  expect(element).toBeInTheDocument();
  allTodo = screen.getAllByTestId('todo');
  expect(allTodo.length).toBe(3);

  expect(inputElement).toHaveTextContent('');
};

test('check click second todo', () => {

  prepareData();
  const allTodo = screen.getAllByTestId('todo');
  expect(allTodo[0]).toHaveTextContent('Todo2');

  let todo0 = screen.getByText(/Todo0/i);
  let todo1 = screen.getByText(/Todo1/i);
  let todo2 = screen.getByText(/Todo2/i);
  fireEvent.click(todo1);

  const activeButton = screen.getByTestId('todoButton' + VIEW_MODE.ACTIVE);
  fireEvent.click(activeButton);
  expect(todo1).not.toBeInTheDocument();
  expect(todo0).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();

  const doneButton = screen.getByTestId('todoButton' + VIEW_MODE.DONE);
  fireEvent.click(doneButton);
  todo1 = screen.getByText(/Todo1/i);
  expect(todo1).toBeInTheDocument();
  expect(todo0).not.toBeInTheDocument();
  expect(todo2).not.toBeInTheDocument();
});

test('check click toggle All', () => {

  prepareData();
  let todo0 = screen.getByText(/Todo0/i);
  let todo1 = screen.getByText(/Todo1/i);
  let todo2 = screen.getByText(/Todo2/i);
  fireEvent.click(todo1);

  const toggleAllButton = screen.getByTestId('todoButtonToggleAll');
  fireEvent.click(toggleAllButton);

  const activeButton = screen.getByTestId('todoButton' + VIEW_MODE.ACTIVE);
  fireEvent.click(activeButton);
  expect(todo1).toBeInTheDocument();
  expect(todo0).not.toBeInTheDocument();
  expect(todo2).not.toBeInTheDocument();

  const doneButton = screen.getByTestId('todoButton' + VIEW_MODE.DONE);
  fireEvent.click(doneButton);
  expect(todo1).not.toBeInTheDocument();
  todo0 = screen.getByText(/Todo0/i);
  expect(todo0).toBeInTheDocument();
  todo2 = screen.getByText(/Todo2/i);
  expect(todo2).toBeInTheDocument();
});


test('check remove 1 todo', () => {
  prepareData();

  let allTodo = screen.getAllByTestId('todo');
  expect(allTodo.length).toBe(3);

  let todo0 = screen.getByText(/Todo0/i);
  let todo1 = screen.getByText(/Todo1/i);
  let todo2 = screen.getByText(/Todo2/i);

  expect(todo0).toBeInTheDocument();
  expect(todo1).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();

  const allTodoDelete = screen.getAllByTestId('todoDelete');
  fireEvent.click(allTodoDelete[2]);
  expect(todo0).not.toBeInTheDocument();
  expect(todo1).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();

  allTodo = screen.getAllByTestId('todo');
  expect(allTodo.length).toBe(2);

});