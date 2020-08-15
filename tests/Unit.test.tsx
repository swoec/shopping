import * as React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { View } from 'react-native';


import App from '../app/Unit';

describe('Dashboard', () => {
    it('renders correctly with defaults', () => {

        const hello = shallow(<App />);
        expect(hello.find(View)).toHaveLength(1);
    })

})
