import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import Spinner from '../../../components/UI/Loader';

describe("<Spinner />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });
});