import React from 'react';
import { shallow } from 'enzyme';

import { SortFilterContainer } from './SortFilterContainer';
import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';

import { SORT_FILTERS } from '../../../shared/filtersMock';

describe('SortContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SortFilterContainer filters={SORT_FILTERS} />);
  });

  test('renders single component *FilterPanel*', () => {
    expect(wrapper.find(FilterPanel).length).toBe(1);
  });
});
