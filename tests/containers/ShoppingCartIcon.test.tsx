/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { withNavigation } from "react-navigation";

import ShoppingCartIcon from "../../app/containers/ShoppingCartIcon";
import { mount, shallow } from "enzyme";
import { View } from "react-native";

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock("react-navigation", () => ({
  withNavigation: (Component) => (props) => (
    <Component navigation={{ navigate: jest.fn() }} {...props} />
  ),
}));

describe("Dashboard", () => {
  it("show Shopping cart", () => {
    const initialState = {
      id: 1,
      name: "Sledgehammer",
      price: 125.75,
      quantity: 1,
    };
    const store = mockStore(initialState);
    const cartItems = [
      { id: 1, name: "Sledgehammer", price: 125.75, quantity: 1 },
    ];

    const props = { cartItems };
    const wrapper = mount(<ShoppingCartIcon store={store} props={props} />, {
      attachTo: document.body,
    });
    expect(wrapper.find(View)).toHaveLength(2);
  });
});
