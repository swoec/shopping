import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { View, Button } from "react-native";
import HomeScreen from "../../app/containers/HomeScreen";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  withNavigation,
} from "react-navigation";

const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe("Test Home Screen", () => {
  let wrapper: ShallowWrapper;
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
    wrapper = shallow(<HomeScreen {...props} />);
  });
  it("It should match initial snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("It should call navigation when button is clicked", () => {
    wrapper
      .find(Button)
      .props()
      .onPress({} as any);
    expect(props.navigation.navigate).toHaveBeenCalledWith("Books");
  });
});
