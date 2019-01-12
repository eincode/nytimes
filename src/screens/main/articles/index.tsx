import React, { Component } from "react"
import { View, StyleSheet, Text, StatusBar } from "react-native"

export default class Articles extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#2b98f0"} barStyle={"light-content"} />
        <Text>Articles</Text>
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
