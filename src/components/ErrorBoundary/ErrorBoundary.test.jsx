import React from 'react';
import { mount } from 'enzyme';

import { ErrorBoundary } from './ErrorBoundary';

const ErrorChild = () => {
  throw new Error('error message');
};

describe('ErrorBoundary', () => {
  test('displays error message on error from children', () => {
    const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');

    mount(
      <ErrorBoundary>
        <ErrorChild />
      </ErrorBoundary>
    );

    expect(spy).toHaveBeenCalled();
  });
});
