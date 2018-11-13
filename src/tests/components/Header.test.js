import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

let startLogoutSpy, wrapper;

beforeEach(() => {
    startLogoutSpy = jest.fn();
    wrapper = shallow(<Header startLogout={startLogoutSpy} 
                      />);
});

test('Should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click.', () => {
    wrapper.find('button').simulate('click');

    expect(startLogoutSpy).toHaveBeenCalled();
});