import React, { Component } from "react"
import { View, StyleSheet, Text, StatusBar } from "react-native"
import SearchBar from "../../../components/SearchBar"

export default class Articles extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#2b98f0"} barStyle={"light-content"} />
        <SearchBar placeholder={"Search"} />
        <Text>Articles</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
})
