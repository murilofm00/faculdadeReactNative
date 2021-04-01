import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class AppBar extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.logo}>Logo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    backgroundColor: "#3D8AF7",
    color: "white",
    alignItems: "flex-start",
    padding: 20,
  },
  logo: {
    fontSize: 25,
    color: "white",
  },
});
