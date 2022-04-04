import { render } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import Spacing from '../Spacing';

test('check Spacing', () => {
  render(<AppWrapper>
    <Spacing size={2}/>
  </AppWrapper>);
});
