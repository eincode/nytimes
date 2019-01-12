import React, { Component } from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { NavigationTabScreenOptions } from "react-navigation"

import IC_BOOK_ACTIVE from "../../../../assets/ic_book_active.png"
import IC_BOOK_INACTIVE from "../../../../assets/ic_book_inactive.png"

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
        <Text>Book</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
