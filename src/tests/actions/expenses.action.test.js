import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    startEditExpense,
    removeExpense,
    startRemoveExpense, 
    setExpenses, 
    startSetExpenses 
} from '../../actions/expenses.action';
import expenses from '../fixtures/expenses.fixture';

import db from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = {
    auth: {
        uid
    }
};
const createMockStore = configureMockStore([thunk]);

/*** Dummy data. ***/
beforeEach((done) => {
    const expensesData = {};

    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });

    db.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());

    jest.setTimeout(30000);
});

test('Should setup REMOVE_EXPENSE action object.', () => {
    const action = removeExpense({ id: '123abc' });
    
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should remove the expenses from FIREBASE', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });

        return db.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });

});

test('Should setup EDIT_EXPENSE action object.', () => {
    const action = editExpense('123abc', { 
                        description: "Hello",
                        note: "Hello note",
                        createdAt: 123,
                        amount: 123400
                    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { 
            description: "Hello",
            note: "Hello note",
            createdAt: 123,
            amount: 123400            
        }
    });
});

test('Should edit the expenses from FIREBASE', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updates = { 
        description: "Hello",
        note: "Hello note",
        createdAt: 123,
        amount: 123400            
    };

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });

        return db.ref(`users/${uid}/expenses/${id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(updates);
        done();
    });
});

test('Should setup ADD_EXPENSE action object.', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store.', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 100000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});


test('Should add expense with defaults to database and store.', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('Should setup SET_EXPENSES action object.', () => {    
    const action = setExpenses(expenses);
    
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch the expenses from FIREBASE', (done) => {
    const store = createMockStore(defaultAuthState);

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });

        done();
    });
});