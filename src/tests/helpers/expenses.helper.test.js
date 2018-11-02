import moment from 'moment';
import getVisibleExpenses from '../../helpers/expenses.helper';
import expenses from '../fixtures/expenses.fixture';

test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    
    expect(result).toEqual([ 
        expenses[2],
        expenses[1]
     ]);
});

test('Should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ]);
});

test('Should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[0],
        expenses[1]
    ]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[1],
        expenses[2],
        expenses[0]
    ]);
});

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ]);
});