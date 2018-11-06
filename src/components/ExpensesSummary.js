import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getExpensesTotal from '../helpers/expense-total.helper';
import getVisibleExpenses from '../helpers/expenses.helper';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div>
            <h3>
                Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
            </h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);