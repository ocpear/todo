import { render } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import Switch from '../Switch';

test('check Switch', () => {
  render(<AppWrapper>
    <Switch />
  </AppWrapper>);
});
