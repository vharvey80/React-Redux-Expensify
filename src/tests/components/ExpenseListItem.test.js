import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListItem } from '../../components/ExpenseListItem';

import expenses from '../fixtures/expenses.fixture';

test('Should render ExpenseListItem with fixture data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});