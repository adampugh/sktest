import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import EventArtist from '../../../components/Event/EventArtist';

describe("<EventArtist />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<EventArtist name={'bob'} img={'img'} id={'123'} />);
        expect(wrapper).toMatchSnapshot();
    });
});