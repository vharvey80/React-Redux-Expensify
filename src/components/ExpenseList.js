import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

import filterExpenses from '../helpers/expenses.helper';

export const ExpenseList = ({ expenses }) => (
    <div>
        {
            expenses.length === 0
                ? <p>No expenses</p>
                : <div>
                    {expenses.map((expense, index) => <ExpenseListItem key={expense.id} {...expense} />)}
                  </div>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: filterExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

