import moment from 'moment';
import filtersReducer from '../../reducers/filters.reducer';

test('Should generate default state', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should generate sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: 'Rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const text = 'Bill'

    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
});

test('Should set startDate filter', () => {
    const startDate = moment(0).add(4, 'days');

    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
});

test('Should set text filter', () => {
    const endDate = moment(0).subtract(4, 'months');

    const action = {
        type: 'SET_END_DATE',
        endDate
    }

    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
});