import { render, screen, fireEvent } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import Todo from '../Todo';

test('check Todo', () => {
  const onDelete = jest.fn()
  const onChangeActive = jest.fn()
  render(<AppWrapper>
    <Todo
      label='todo1'
      isActive={true}
      id={1}
      onDelete={onDelete}
      onChangeActive={onChangeActive}
    />
  </AppWrapper>);

  const labelElement = screen.getByText(/todo1/i);
  expect(labelElement).toBeInTheDocument();

  const todoDelete = screen.getByTestId('todoDelete');
  fireEvent.click(todoDelete);
  expect(onDelete).toHaveBeenCalled()

  const todo = screen.getByTestId('todo');
  fireEvent.click(todo);
  expect(onChangeActive).toHaveBeenCalled();
});
