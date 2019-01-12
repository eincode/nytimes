import React, { Component } from "react"
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation"

import Articles from "./src/screens/main/articles"
import Books from "./src/screens/main/books"

const MainTabNavigator = createBottomTabNavigator({
  Articles: { screen: Articles },
  Books: { screen: Books },
})

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: MainTabNavigator,
        navigationOptions: {
          title: "NY Times",
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#2b98f0",
        },
        headerTintColor: "white",
      },
    },
  ),
)

export default class App extends Component {
  public render() {
    return <AppNavigator />
  }
}
