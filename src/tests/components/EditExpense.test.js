import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses.fixture';

import { EditExpensePage } from '../../components/EditExpensePage';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
                        editExpense={editExpenseSpy} 
                        removeExpense={removeExpenseSpy}
                        history={historySpy}
                        expense={expenses[1]} 
                      />);
});

test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(wrapper).toMatchSnapshot();
});

test('Should handle removeExpense', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('button').simulate('click');

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });
    expect(wrapper).toMatchSnapshot();
});