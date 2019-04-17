import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import Search from '../../../components/Search/Search';

describe("<Search />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot();
    });
});