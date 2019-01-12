import React from "react"
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TextInputProps,
} from "react-native"
import metrics from "../config/metrics"

import IC_SEARCH from "../../assets/ic_search.png"

export default (props: TextInputProps) => (
  <View style={styles.container}>
    <Image source={IC_SEARCH} style={styles.icon} />
    <TextInput placeholder={props.placeholder} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: metrics.DEVICE_WIDTH,
    height: 50,
    backgroundColor: "#FFF",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: metrics.BORDER_COLOR,
  },

  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
})
