import React from "react"
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Image,
} from "react-native"
import metrics from "../../../config/metrics"

interface IProps extends TouchableOpacityProps {
  book: BookDetail
}

export default (props: IProps) => (
  <TouchableOpacity {...props} style={styles.container}>
    <Image
      source={{
        uri: `https://s1.nyt.com/du/books/images/${
          props.book.primary_isbn13
        }.jpg`,
      }}
      style={styles.image}
      resizeMode={"cover"}
    />
    <View style={styles.contentContainer}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {props.book.title}
      </Text>
      <Text style={{ color: "grey", fontSize: 12 }}>
        by {props.book.author}
      </Text>
      <Text style={{ marginTop: 10 }}>{props.book.description}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: metrics.DEVICE_WIDTH * 0.4,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 5,
    borderRadius: 5,
    padding: 10,
    minHeight: 200,
  },

  image: {
    width: metrics.DEVICE_WIDTH * 0.4,
    height: 200,
    position: "absolute",
  },

  contentContainer: {
    marginTop: 200,
  },
})
