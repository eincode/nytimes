import React, { Component } from "react"
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
} from "react-native"
import SearchBar from "../../../components/SearchBar"
import ArticleItem from "./ArticleItem"
import {
  NavigationScreenProp,
  NavigationTabScreenOptions,
} from "react-navigation"
import Modal from "react-native-modal"

import { searchArticle } from "../../../controllers/article"
import metrics from "../../../config/metrics"
import SortButton from "./SortButton"

import IC_ARTICLE_ACTIVE from "../../../../assets/ic_article_active.png"
import IC_ARTICLE_INACTIVE from "../../../../assets/ic_article_inactive.png"

interface IProps {
  navigation?: NavigationScreenProp<any, any>
}

interface IState {
  isLoadingArticle: boolean
  query: string
  articles: Article[] | null
  isModalVisible: boolean
  sortMethod: SortMethod
}

export enum SortMethod {
  DEFAULT = "default",
  NEWEST = "newest",
  OLDEST = "oldest",
}

export default class Articles extends Component<IProps, IState> {
  public static navigationOptions: NavigationTabScreenOptions = {
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true:
          return (
            <Image
              source={IC_ARTICLE_ACTIVE}
              style={{ height: 20, width: 20 }}
              resizeMode={"contain"}
            />
          )
        case false:
          return (
            <Image
              source={IC_ARTICLE_INACTIVE}
              style={{ height: 20, width: 20 }}
              resizeMode={"contain"}
            />
          )
      }
    },
  }

  public state = {
    isLoadingArticle: false,
    query: "trump",
    articles: [],
    isModalVisible: false,
    sortMethod: SortMethod.DEFAULT,
  }

  public componentDidMount() {
    this.searchArticle(this.state.query)
  }

  public async searchArticle(
    query: string,
    sortMethod?: string,
  ): Promise<void> {
    this.setState({ isLoadingArticle: true })
    const articles = await searchArticle(query, sortMethod)
    this.setState({ articles, isLoadingArticle: false })
  }

  public setSortMethod(sortMethod: SortMethod) {
    if (sortMethod === this.state.sortMethod) {
      return
    }
    this.setState({ sortMethod })
    this.searchArticle(this.state.query, sortMethod)
    this.toggleModalState()
  }

  public toggleModalState() {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  public render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={metrics.PRIMARY_COLOR}
          barStyle={"light-content"}
        />
        <SearchBar
          placeholder={"Type and hit enter"}
          onChangeText={(value) => this.setState({ query: value })}
          onSubmitEditing={() => this.searchArticle(this.state.query)}
        />
        {this.state.isLoadingArticle ? (
          <ActivityIndicator style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            data={this.state.articles}
            extraData={this.state}
            style={{ width: metrics.DEVICE_WIDTH }}
            contentContainerStyle={{ alignItems: "center" }}
            keyExtractor={(item) => item._id}
            renderItem={({ item }: { item: Article }) => (
              <ArticleItem
                article={item}
                onPress={() =>
                  this.props.navigation!.navigate("DetailArticle", {
                    url: item.web_url,
                  })
                }
              />
            )}
          />
        )}
        <SortButton
          style={styles.fab}
          onPress={() => this.toggleModalState()}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          style={styles.modal}
          onBackdropPress={() => this.toggleModalState()}
        >
          <View style={styles.modalContent}>
            <Text style={{ color: "grey", fontSize: 12, marginBottom: 10 }}>
              Sort Articles By
            </Text>
            <TouchableOpacity
              style={styles.sortItemButton}
              onPress={() => this.setSortMethod(SortMethod.DEFAULT)}
            >
              <Text style={{ fontSize: 17 }}>Relevance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortItemButton}
              onPress={() => this.setSortMethod(SortMethod.NEWEST)}
            >
              <Text style={{ fontSize: 17 }}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortItemButton}
              onPress={() => this.setSortMethod(SortMethod.OLDEST)}
            >
              <Text style={{ fontSize: 17 }}>Oldest</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },

  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },

  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    borderRadius: 4,
  },

  sortItemButton: {
    marginVertical: 10,
  },
})
