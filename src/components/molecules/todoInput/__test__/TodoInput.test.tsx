import { render, } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import TodoInput from '../TodoInput';

test('check TodoInput', () => {
  render(<AppWrapper>
    <TodoInput
      addTodo={jest.fn()}
    />
  </AppWrapper>);
});
