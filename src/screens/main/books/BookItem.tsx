import React, { StatelessComponent } from "react"
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
  book?: BookResult
}

const BookItem: StatelessComponent<IProps> = (props: IProps) => (
  <TouchableOpacity {...props} style={styles.container}>
    <Image
      source={{
        uri: `https://s1.nyt.com/du/books/images/${
          props.book!.isbns[0]
            ? props.book!.isbns[0].isbn13
            : props.book!.book_details[0].primary_isbn13
        }.jpg`,
      }}
      style={styles.image}
      resizeMode={"cover"}
    />
    <View style={styles.contentContainer}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {props.book!.book_details[0].title}
      </Text>
      <Text style={{ color: "grey", fontSize: 12 }}>
        by {props.book!.book_details[0].author}
      </Text>
      <Text style={{ marginTop: 10 }}>
        {props.book!.book_details[0].description}
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    maxWidth: metrics.DEVICE_WIDTH * 0.45,
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
    flex: 1,
    margin: 10,
  },

  image: {
    width: metrics.DEVICE_WIDTH * 0.45,
    height: 200,
    position: "absolute",
  },

  contentContainer: {
    marginTop: 200,
  },
})

BookItem.defaultProps = {
  book: {
    amazon_product_url:
      "https://www.amazon.com/Full-Package-Lauren-Blakely-ebook/dp/B01MT5HMRV?tag=NYTBS-20",
    isbns: [],
    book_details: [
      {
        author: "book_author",
        description: "book_description",
        primary_isbn13: "9780385341004",
        publisher: "book_publisher",
        title: "book_title",
      },
    ],
  },
}

export default BookItem
