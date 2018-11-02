import moment from 'moment';
import expensesReducer from '../../reducers/expenses.reducer';
import expenses from '../fixtures/expenses.fixture';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);    
});

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Water Bill',
        note: '',
        createdAt: 0,
        amount: 12300
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        ...expenses,
        expense
    ]);    
});

test('Should edit an expense by id', () => {
    const updates = {
        description: 'Updated',
        amount: 1102300,
        note: '',
        createdAt: 0
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };

    const state = expensesReducer(expenses, action);

    expect(state[0]).toEqual({
        id: expect.any(String),
        ...updates
    });
});

test('Should not edit expense if expense not found', () => {
    const updates = {
        description: 'Updated',
        amount: 1102300,
        note: '',
        createdAt: 0
    };    

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});