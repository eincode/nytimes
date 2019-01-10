import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native"
import { NavigationStackScreenOptions } from "react-navigation"

export default class Main extends Component {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "NYTimes",
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
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
