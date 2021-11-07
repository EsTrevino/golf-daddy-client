import React from 'react';
import { render } from '@testing-library/react';

import Test from '../index';

describe('Header', () => {
  it('should find testid for header', () => {
    const { getByTestId } = render(<Test />);

    expect(getByTestId('someId')).toBeTruthy();
  });
});
