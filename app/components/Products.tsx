import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

interface Product {
  id: string;
  title: string;
  price: number;
}

class Products extends Component {
  public props: any;
  renderProducts = (products) => {
    return products.map((item, index) => {
      return (
        <View key={index} style={{ padding: 20 }}>
          <li style={{ margin: 50 }}>
            <span>{item.name}</span>{" "}
            <span style={{ marginLeft: "2em" }}>{item.price}</span>{" "}
            <span style={{ marginLeft: "3em" }}>
              <Icon
                onPress={() => this.props.onPress(item)}
                name="pluscircleo"
                size={20}
                color="#900"
              />{" "}
            </span>
          </li>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}
export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
