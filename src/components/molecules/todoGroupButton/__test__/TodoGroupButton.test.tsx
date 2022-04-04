import { render, } from '@testing-library/react';
import AppWrapper from '../../../../AppWrapper';
import { VIEW_MODE } from '../../../../constants';
import TodoGroupButton from '../TodoGroupButton';

test('check TodoButton', () => {
  render(<AppWrapper>
    <TodoGroupButton
      viewMode={VIEW_MODE.ACTIVE}
      onToggleAll={jest.fn()}
      onChangeViewMode={jest.fn()}
    />
  </AppWrapper>);
});
