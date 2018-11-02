// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return [
                ...state.filter(({ id }) =>
                    id !== action.id
                )
            ];
        case 'EDIT_EXPENSE':
            return state.map((exp, index) => {
                if (exp.id === action.id) {
                    return {
                        ...exp,
                        ...action.updates
                    };
                } else {
                    return exp;
                }
            });
        default:
            return state;
    }
};

export default expensesReducer;