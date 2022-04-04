import { render, screen } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import Button from '../Button';

test('check Button', () => {
  render(<AppWrapper>
    <Button text='button name' />
  </AppWrapper>);
  const element = screen.getByText(/button name/i);
  expect(element).toBeInTheDocument();
});
