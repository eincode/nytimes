import React, { Component } from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"

import Main from "./src/screens/main"

const AppNavigator = createAppContainer(
  createStackNavigator({
    Main: { screen: Main },
  }),
)

export default class App extends Component {
  public render() {
    return <AppNavigator />
  }
}
