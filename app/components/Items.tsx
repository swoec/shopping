import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

class Items extends Component {
  public props: any;
  renderProducts = (products) => {
    return products.map((item, index) => {
      return (
        <View key={index} style={{ padding: 20 }}>
          <li
            style={{
              margin: 40,
              marginLeft: "10em",
              marginRight: "30em",
              display: "inline-block",
              justifyContent: "space-between",
            }}
          >
            <span>{item.name} </span>
            <span>{" -- Price: " + item.price}</span>{" "}
            <span>{" --Quantity:  " + item.quantity}</span>
            <span>
              {" "}
              {"---total:" + (item.quantity * item.price).toFixed(2)}
            </span>
            <span style={{ marginLeft: "3em" }}>
              <Icon
                onPress={() => this.props.onPress(item)}
                name="closecircleo"
                size={"{50}"}
                color="#900"
              />
            </span>{" "}
          </li>
        </View>
      );
    });
  };
  renderTotal = (products) => {
    let total = 0;

    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    return (
      <li style={{ marginLeft: "35em" }}>
        {"Total Spending:" + total.toFixed(2)}
      </li>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
        {this.renderTotal(this.props.products)}
      </View>
    );
  }
}
export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
