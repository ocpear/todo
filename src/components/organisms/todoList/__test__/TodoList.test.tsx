import { render, } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import TodoList from '../TodoList';

test('check TodoList', () => {
  render(<AppWrapper>
    <TodoList />
  </AppWrapper>);
});
