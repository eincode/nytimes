import React, { Component } from "react"
import { createStackNavigator } from "react-navigation"

import Main from "./src/screens/main"

const AppNavigator = createStackNavigator({
  Main: { screen: Main },
})

export default class App extends Component {
  public render() {
    return <AppNavigator />
  }
}
