import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./app/containers/HomeScreen";
import BooksScreen from "./app/containers/BooksScreen";
import ShoppingCartIcon from "./app/containers/ShoppingCartIcon";
import CartScreen from "./app/containers/CartScreen";
class ShoppingCart extends Component {
  render() {
    return <AppStackNavigator ></AppStackNavigator>;
  }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Books: BooksScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      headerTitle: "Shopping App",
      headerRight: <ShoppingCartIcon />,
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
