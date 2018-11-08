import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../../components/Login';

let startLoginSpy, wrapper;

beforeEach(() => {
    startLoginSpy = jest.fn();
    wrapper = shallow(<Login startLogin={startLoginSpy} />);
});

test('Should render Login correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click.', () => {
    wrapper.find('button').simulate('click');

    expect(startLoginSpy).toHaveBeenCalled();
});