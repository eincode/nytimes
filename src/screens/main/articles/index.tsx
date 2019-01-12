import React, { Component } from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native"
import SearchBar from "../../../components/SearchBar"
import ArticleItem from "./ArticleItem"
import { NavigationScreenProp } from "react-navigation"

import { searchArticle } from "../../../controllers/article"
import metrics from "../../../config/metrics"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

interface IState {
  isLoadingArticle: boolean
  query: string
  articles: Article[] | null
}

export default class Articles extends Component<IProps, IState> {
  public state = {
    isLoadingArticle: false,
    query: "",
    articles: [],
  }

  public componentDidMount() {
    this.searchArticle("trump")
  }

  public async searchArticle(query: string): Promise<void> {
    this.setState({ isLoadingArticle: true })
    const articles = await searchArticle(query)
    this.setState({ articles, isLoadingArticle: false })
  }

  public render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#2b98f0"} barStyle={"light-content"} />
        <SearchBar
          placeholder={"Type and hit enter"}
          onChangeText={(value) => this.setState({ query: value })}
          onSubmitEditing={() => this.searchArticle(this.state.query)}
        />
        {this.state.isLoadingArticle ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.state.articles}
            extraData={this.state}
            style={{ width: metrics.DEVICE_WIDTH }}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }: { item: Article }) => (
              <ArticleItem
                article={item}
                onPress={() =>
                  this.props.navigation.navigate("DetailArticle", {
                    url: item.web_url,
                  })
                }
              />
            )}
          />
        )}
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
