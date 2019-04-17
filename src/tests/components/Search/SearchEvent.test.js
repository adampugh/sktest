import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import SearchEvent from '../../../components/Search/SearchEvent';

describe("<SearchEvent />", () => {
    it("should match snapshot", () => {
        const props = {
            name: '123', date: '123', desc: '123', img: '123', venue: '123', id: '123'
        }

        const wrapper = shallow(<SearchEvent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});