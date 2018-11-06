import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

import expenses from '../fixtures/expenses.fixture';

test('Should correctly render ExpensesSummary with 1 expense.', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary with multiple expenses.', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23213213213221} />);
    expect(wrapper).toMatchSnapshot();
});