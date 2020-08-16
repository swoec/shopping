import "jsdom-global/register";
import * as React from "react";
import { Provider } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import configureStore from "redux-mock-store";
import Enzyme, { shallow, render, mount } from "enzyme";
import BooksScreen from "../../app/containers/BooksScreen";
const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Dashboard", () => {

  it("show Books Screen", () => {
    const initialState = {};
    const store = mockStore(initialState);

    // sinon.spy(BooksScreen.prototype);
    const wrapper = mount(<BooksScreen store={store} />, {
      attachTo: document.body,
    });
    expect(wrapper.find(View)).toHaveLength(7);
  });

  it("add to cart correctly", () => {
    const initialState = { id: 1, name: "Sledgehammer", price: 125.75 };
    const store = mockStore(initialState);

    const product = [{ id: 1, name: "Sledgehammer", price: 125.75 }];
    const addTodo = () => ({ type: "ADD_TO_CART", payload: product });
    store.dispatch(addTodo());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: "ADD_TO_CART", payload: product };
    expect(actions).toEqual([expectedPayload]);
  });


});
