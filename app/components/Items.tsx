import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import StripeCheckout from "react-stripe-checkout";
import {stringify} from "querystring";

interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

let test = 0;
let prods = [];

class Items extends Component {
  public props: any;
  renderProducts = (products) => {
    prods = products;
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
                size={30}
                color="#900"
              />
            </span>{" "}
          </li>
        </View>
      );
    });
  };


  onToken = (token) => {
    console.log(token);
    token["amount"] = test;
    console.log(JSON.stringify(prods));
    token["description"]= JSON.stringify(prods);
    const headers = {
      "Content-Type": "application/json"
    }
    fetch("http://localhost:8081/token", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(token)
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  printToken = (token) => {
    console.log(token);
    console.log(token.id);
  };

  renderTotal = (products) => {
    let total = 0;

    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    test = total * 100;

    return (
      <ul style={{ marginLeft: "35em", flexDirection: "column" }}>
        <li>
          <span>{"Total Spending:" + total.toFixed(2)}</span>
        </li>

        <li>
          <StripeCheckout
            amount={total * 100}
            token={this.onToken}
            description="des"
            stripeKey="pk_test_51GscWhDnFVse7zZVdt78PkvqV7V3xQujrL8rF39E8eByodrpeONuZ5DvyfVhXhArJ4S0QNkAYj9u5tafnaZPTX0n00yknoKOuT"
          />
        </li>
      </ul>
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
