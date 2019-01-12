import React, { Component } from "react"
import { WebView } from "react-native"
import { NavigationStackScreenOptions } from "react-navigation"

export default class DetailArticle extends Component {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Detail Article",
  }

  public render() {
    return <WebView source={{ uri: "https://google.com" }} />
  }
}
