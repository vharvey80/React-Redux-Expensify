import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';

import { filters, altFilters } from '../fixtures/filters.fixture';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                        filters={filters}
                        setTextFilter={setTextFilterSpy}
                        sortByDate={sortByDateSpy}
                        sortByAmount={sortByAmountSpy}
                        setStartDate={setStartDateSpy}
                        setEndDate={setEndDateSpy}  
                      />);
});


test('Should render ExpenseListFilters correctly with default data', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Shoul render ExpenseListFilters with all data correctly ', () => {
    wrapper.setProps({
        filters: altFilters
    });

    expect(wrapper).toMatchSnapshot();
});

test('Should handle onTextChange', () => {
    const value = 'TextChanged!'

    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    });

    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should sortByDate', () => {
    const value = 'date';

    wrapper.setProps({
        filters: altFilters
    });

    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });

    expect(sortByDateSpy).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});

test('Should sortByAmount', () => {
    const value = 'amount';

    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });

    expect(sortByAmountSpy).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();    
});

test('Should handle dateChanges', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(7, 'days');
    
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });

    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
    expect(wrapper).toMatchSnapshot();
});

test('Should handle on dateFocusChange', () => {
    const isFocused = 'startDate';

    wrapper.find('DateRangePicker').prop('onFocusChange')(isFocused);

    expect(wrapper.state('calendarFocused')).toBe(isFocused);
    expect(wrapper).toMatchSnapshot();
});