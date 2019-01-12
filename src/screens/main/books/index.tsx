import React, { Component } from "react"
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { NavigationTabScreenOptions } from "react-navigation"
import Modal from "react-native-modal"

import IC_BOOK_ACTIVE from "../../../../assets/ic_book_active.png"
import IC_BOOK_INACTIVE from "../../../../assets/ic_book_inactive.png"
import BookItem from "./BookItem"
import { getBooksByListName } from "../../../controllers/books"

interface IState {
  books: BookResult[] | null
  isLoadingBooks: boolean
  listName: ListName
  isModalVisible: boolean
}

enum ListName {
  HARD = "hardcover-fiction",
  EBOOK = "e-book-fiction",
}

export default class Books extends Component<any, IState> {
  public static navigationOptions: NavigationTabScreenOptions = {
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true:
          return (
            <Image
              source={IC_BOOK_ACTIVE}
              style={{ height: 20, width: 20 }}
              resizeMode={"contain"}
            />
          )
        case false:
          return (
            <Image
              source={IC_BOOK_INACTIVE}
              style={{ height: 20, width: 20 }}
              resizeMode={"contain"}
            />
          )
      }
    },
  }

  public state = {
    books: [],
    isLoadingBooks: false,
    listName: ListName.EBOOK,
    isModalVisible: false,
  }

  public componentDidMount() {
    this.getBooks(this.state.listName)
  }

  public async getBooks(listName: string) {
    this.setState({ isLoadingBooks: true })
    const books = await getBooksByListName(listName)
    this.setState({ books, isLoadingBooks: false })
  }

  public setListName(listName: ListName) {
    if (listName === this.state.listName) {
      return
    }
    this.setState({ listName })
    this.getBooks(listName)
    this.toggleModalState()
  }

  public toggleModalState() {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ marginTop: 10, marginLeft: 10 }}
          onPress={() => this.toggleModalState()}
        >
          Sort book by:{" "}
          {this.state.listName === ListName.EBOOK
            ? "E-Book Fiction"
            : "Hardcover Fiction"}{" "}
          ▼
        </Text>
        {this.state.isLoadingBooks ? (
          <ActivityIndicator style={{ marginTop: 10 }} />
        ) : (
          <FlatList
            data={this.state.books}
            extraData={this.state}
            numColumns={2}
            style={{ flex: 1 }}
            keyExtractor={(item) => item.book_details[0].primary_isbn13}
            contentContainerStyle={{
              justifyContent: "space-evenly",
            }}
            renderItem={({ item }: { item: BookResult }) => (
              <BookItem book={item} />
            )}
          />
        )}
        <Modal
          isVisible={this.state.isModalVisible}
          style={styles.modal}
          onBackdropPress={() => this.toggleModalState()}
        >
          <View style={styles.modalContent}>
            <Text style={{ color: "grey", fontSize: 12, marginBottom: 10 }}>
              Sort Books By
            </Text>
            <TouchableOpacity
              style={styles.sortItemButton}
              onPress={() => this.setListName(ListName.EBOOK)}
            >
              <Text style={{ fontSize: 17 }}>E-Book Fiction</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortItemButton}
              onPress={() => this.setListName(ListName.HARD)}
            >
              <Text style={{ fontSize: 17 }}>Hardcover Fiction</Text>
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
