import "jsdom-global/register";
import * as React from "react";
import { Provider } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import configureStore from "redux-mock-store";
import Enzyme, { shallow, render, mount } from "enzyme";
import CartScreen from "../../app/containers/CartScreen";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("CartScreen", () => {
  it("show cart Screen", () => {
    const initialState = [
      { id: 1, name: "Sledgehammer", price: 125.75, quantity: 1 },
    ];
    const store = mockStore(initialState);
    const wrapper = mount(<CartScreen store={store} />, {
      attachTo: document.body,
    });
    expect(wrapper.find(View)).toHaveLength(3);
  });

  it("delete to cart correctly", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const product = [
      { id: 1, name: "Sledgehammer", price: 125.75, quantity: 1 },
    ];
    const removeTodo = () => ({ type: "REMOVE_FROM_CART", payload: product });
    store.dispatch(removeTodo());
    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: "REMOVE_FROM_CART", payload: product };
    expect(actions).toEqual([expectedPayload]);
  });
});
