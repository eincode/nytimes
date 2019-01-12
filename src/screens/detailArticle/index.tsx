import React, { Component } from "react"
import { WebView } from "react-native"
import {
  NavigationStackScreenOptions,
  NavigationScreenProp,
} from "react-navigation"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class DetailArticle extends Component<IProps> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: "Detail Article",
  }

  public render() {
    return <WebView source={{ uri: this.props.navigation.getParam("url") }} />
  }
}
