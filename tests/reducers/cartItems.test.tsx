import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import cartItems from "../../app/reducers/cartItems";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Dashboard", () => {
  it("add to cart correctly", () => {
    const initialState = { id: 1, name: "Sledgehammer", price: 125.75 };
    const store = mockStore(initialState);

    const product = [{ id: 1, name: "Sledgehammer", price: 125.75 }];
    let action = { type: "ADD_TO_CART", payload: product };

    const newState = cartItems([initialState], action);
    expect(newState).toMatchSnapshot();
    // Sending the same id should clean it
    expect(cartItems(newState, action)).toMatchSnapshot();
  });

  it("delete to cart correctly", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const product = [
      { id: 1, name: "Sledgehammer", price: 125.75, quantity: 1 },
    ];

    let action = { type: "REMOVE_FROM_CART", payload: product };

    const newState = cartItems([initialState], action);
    expect(newState).toMatchSnapshot();
    // Sending the same id should clean it
    expect(cartItems(newState, action)).toMatchSnapshot();
  });
});
