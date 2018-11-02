import moment from 'moment';
import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate 
} from '../../actions/filters.action';

test('Should setup SET_START_DATE action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should setup SET_END_DATE action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should setup SET_TEXT_FILTER action object', () => {
    const textFilter = 'Bill';

    const action = setTextFilter(textFilter);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: textFilter
    });
});

test('Should setup SET_TEXT_FILTER action object', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });    
});

test('Should setup SORT_BY_DATE action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });    
});

test('Should setup SORT_BY_AMOUNT action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});