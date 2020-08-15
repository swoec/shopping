import * as React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { View } from 'react-native';


import Items from '../../app/components/Items';

describe('Dashboard', () => {
it('renders correctly with defaults', () => {
    const products = [
        {
            id: '1234',
            title: 'Cadeira Rivatti',
            price: 400,
            quantity:1
        },
        {
            id: '123456',
            title: 'Poltrona de madeira',
            price: 600,
            quantity:1
        },
    ];
    // const hello = shallow(<Items products={products}/>);
    // expect(hello.find(View)).toHaveLength(2);
})

})
