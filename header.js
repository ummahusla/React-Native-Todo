import React, { Component } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder={'What needs to be done?'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ededed',
    height: 45,
    borderRadius: 4
  },
  header: {
    paddingHorizontal: 16,
    justifyContent: "space-around",
    alignItems: "center"
    //flexDirection: "row",
  }
});

export default Header;
