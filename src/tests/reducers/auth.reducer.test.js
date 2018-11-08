import authReducer from '../../reducers/auth.reducer';

test('Should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };

    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid);
});

test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({ uid: 'blabla' }, action);

    expect(state).toEqual({});
});