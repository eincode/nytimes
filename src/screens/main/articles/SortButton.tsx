import React from "react"
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from "react-native"

import IC_SORT from "../../../../assets/ic_sort.png"
import metrics from "../../../config/metrics"

interface IProps extends TouchableOpacityProps {
  style: StyleProp<ViewStyle>
}

export default (props: IProps) => (
  <TouchableOpacity
    style={[styles.container, props.style]}
    onPress={props.onPress}
  >
    <Image source={IC_SORT} style={styles.icon} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: metrics.PRIMARY_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 30,
    height: 30,
  },
})
