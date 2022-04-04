import { render, screen } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import Typography from '../Typography';

test('check Typography', () => {
  render(<AppWrapper>
    <Typography text='abc' fontSize={12} />
  </AppWrapper>);
  const element = screen.getByText(/abc/i);
  expect(element).toBeInTheDocument();
});
