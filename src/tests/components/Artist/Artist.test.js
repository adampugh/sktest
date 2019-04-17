import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import Artist from '../../../components/Artist/Artist';

describe("<Artist />", () => {
    it("should match snapshot", () => {
        const matchObj = {
            params: {
                id: '123'
            }
        }
        const wrapper = shallow(<Artist match={matchObj}/>);
        expect(wrapper).toMatchSnapshot();
    });
});