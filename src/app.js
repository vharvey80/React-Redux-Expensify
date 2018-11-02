import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses.action';
import { setTextFilter } from './actions/filters.action';
import getVisibleExpenses from './helpers/expenses.helper';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 24500
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    createdAt: 2000
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 109500
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const app = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
