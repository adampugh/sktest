import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import Event from '../../../components/Event/Event';

describe("<Event />", () => {
    it("should match snapshot", () => {
        const matchObj = {
            params: {
                id: '123'
            }
        }
        const wrapper = shallow(<Event match={matchObj}/>);
        expect(wrapper).toMatchSnapshot();
    });
});