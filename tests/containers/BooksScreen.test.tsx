import * as React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import  configureStore  from 'redux-mock-store'

import cartItems from '../../app/reducers/cartItems';
import BooksScreen from '../../app/containers/BooksScreen';
import {products} from "../../Data";

const middlewares = [];
const mockStore = configureStore(middlewares);


describe('Dashboard', () => {
    it('add to cart correctly', () => {
        const initialState = {id: 1, name: "Sledgehammer", price: 125.75};
        const store = mockStore(initialState);

        const product = [{ id: 1, name: "Sledgehammer", price: 125.75 }];
        const addTodo = () => ({ type: 'ADD_TO_CART' ,payload:product});
        let action = {type:'ADD_TO_CART' , payload:product};
        // @ts-ignore
        // store.dispatch(cartItems(initialState,action));
        store.dispatch(addTodo());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        const expectedPayload = { type: 'ADD_TO_CART',payload:product };
        expect(actions).toEqual([expectedPayload])
    });


    it('delete to cart correctly', () => {
        const initialState = {};
        const store = mockStore(initialState);
        const product = [{ id: 1, name: "Sledgehammer", price: 125.75,quantity:1 }];
        const removeTodo = () => ({ type: 'REMOVE_FROM_CART' ,payload:product});
        store.dispatch(removeTodo())
        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        const expectedPayload = { type: 'REMOVE_FROM_CART',payload:product };
        expect(actions).toEqual([expectedPayload])


    })

})
