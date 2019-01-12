import React, { Component } from "react"
import { View, StyleSheet, Text, StatusBar } from "react-native"
import SearchBar from "../../../components/SearchBar"
import ArticleItem from "./ArticleItem"
import { NavigationScreenProp } from "react-navigation"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Articles extends Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#2b98f0"} barStyle={"light-content"} />
        <SearchBar placeholder={"Type and hit enter"} />
        <ArticleItem
          article={dummy}
          onPress={() => this.props.navigation.navigate("DetailArticle")}
        />
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

const dummy: Article = {
  _id: "lala",
  headline: {
    main: "Trump is dead",
  },
  multimedia: [
    {
      url:
        "https://static01.nyt.com/images/2018/12/07/opinion/07eisenWeb/merlin_147847134_4e4c9709-c7fb-4e71-bbb5-86fccaa7ad3d-articleLarge.jpg",
    },
  ],
  snippet: "He is really dead",
  source: "The New York Times",
  web_url: "https://google.com/",
}
