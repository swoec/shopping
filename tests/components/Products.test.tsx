import * as React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';


import Products from '../../app/components/Products';

describe('Dashboard', () => {
    it('renders correctly with defaults', () => {
        const products = [
            {
                id: '1234',
                title: 'Cadeira Rivatti',
                price: 400
            },
            {
                id: '123456',
                title: 'Poltrona de madeira',
                price: 600

            },
        ];
        const hello = shallow(<Products products={products}/>);
        expect(hello.find(View)).toHaveLength(3);
    })

})
