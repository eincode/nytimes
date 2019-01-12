import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native"

export default class Books extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Book</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
