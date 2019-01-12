import React, { Component } from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { NavigationTabScreenOptions } from "react-navigation"

import IC_BOOK_ACTIVE from "../../../../assets/ic_book_active.png"
import IC_BOOK_INACTIVE from "../../../../assets/ic_book_inactive.png"
import BookItem from "./BookItem"

export default class Books extends Component {
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

  public render() {
    return (
      <View style={styles.container}>
        <Text>Sort book by: Hardcover Fiction</Text>
        <BookItem book={dummy} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

const dummy: BookDetail = {
  author: "John Doe",
  description:
    "A woman who survived alone in the marsh becomes a murder suspect.",
  primary_isbn13: "9780399178573",
  publisher: "Kratos",
  title: "Someone is dead",
}
