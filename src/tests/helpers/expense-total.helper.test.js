import getExpensesTotal from '../../helpers/expense-total.helper';
import expenses from '../fixtures/expenses.fixture';

test('Should returns 0 if no expenses are given.', () => {
    const result = getExpensesTotal();

    expect(result).toBe(0);
});

test('Should correctly add up a single expense.', () => {
    const result = getExpensesTotal([expenses[0]]);

    expect(result).toBe(195);
});

test('Should correctly add up multiple expenses.', () => {
    const result = getExpensesTotal(expenses);

    expect(result).toBe(114195);
});