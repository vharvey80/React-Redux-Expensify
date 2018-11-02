import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../../components/NotFoundPage';

test('Should render not found page with link to home', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});