import React from 'react';
import { mount } from 'enzyme';

import { ErrorBondary } from './ErrorBoundary';

const ErrorChild = () => {
  throw new Error('error message');
};

describe('ErrorBoundary', () => {
  test('displays error message on error from children', () => {
    const spy = jest.spyOn(ErrorBondary.prototype, 'componentDidCatch');

    mount(
      <ErrorBondary>
        <ErrorChild />
      </ErrorBondary>
    );

    expect(spy).toHaveBeenCalled();
  });
});
