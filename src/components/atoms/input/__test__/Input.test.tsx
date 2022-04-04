import { render } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import Input from '../Input';

test('check Input', () => {
  render(<AppWrapper>
    <Input />
  </AppWrapper>);
});
