import { render, } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import TodoTitle from '../TodoTitle';

test('check TodoTitle', () => {
  render(<AppWrapper>
    <TodoTitle />
  </AppWrapper>);
});
