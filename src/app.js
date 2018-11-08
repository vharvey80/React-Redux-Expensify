import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses.action';

import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(app, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('LoggedIn');

    } else {
        console.log('LoggedOut');
    }
});
