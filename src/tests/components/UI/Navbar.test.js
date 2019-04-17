import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import Navbar from '../../../components/UI/Navbar';

describe("<Navbar />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper).toMatchSnapshot();
    });
});