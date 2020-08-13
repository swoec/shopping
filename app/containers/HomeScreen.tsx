import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class HomeScreen extends Component {
  public props: any;
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="start"
          onPress={() => this.props.navigation.navigate("Books")}
        />
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
