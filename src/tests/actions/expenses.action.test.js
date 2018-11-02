import { addExpense, editExpense, removeExpense } from '../../actions/expenses.action';

test('Should setup REMOVE_EXPENSE action object.', () => {
    const action = removeExpense({ id: '123abc' });
    
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
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

test('Should setup ADD_EXPENSE action object.', () => {
    const expenseData = {
        description: "Rent",
        note: "Note for rent for this month.",
        createdAt: 123,
        amount: 123400 
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup ADD_EXPENSE action object with default values.', () => {
    const expectedExpenseData = {
        description: '',
        note: '',
        createdAt: 0,
        amount: 0
    };

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expectedExpenseData,
            id: expect.any(String)
        }
    });
});