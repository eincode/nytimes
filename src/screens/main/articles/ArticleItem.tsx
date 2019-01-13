import React, { StatelessComponent } from "react"
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  View,
  ImageBackground,
} from "react-native"
import metrics from "../../../config/metrics"

interface IProps extends TouchableOpacityProps {
  article?: Article
}

const ArticleItem: StatelessComponent<IProps> = (props: IProps) => (
  <TouchableOpacity style={styles.container} {...props}>
    <ImageBackground
      source={{
        uri: props.article!.multimedia[0]
          ? props.article!.multimedia[0].url
          : "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
      }}
      style={styles.image}
      resizeMode={"cover"}
    >
      <Text style={styles.headline}>{props.article!.headline.main}</Text>
    </ImageBackground>
    <View style={styles.contentContainer}>
      <Text style={styles.source}>{props.article!.source}</Text>
      <Text>{props.article!.snippet}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: metrics.DEVICE_WIDTH * 0.95,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    minHeight: 220,
    marginVertical: 5,
  },

  image: {
    width: metrics.DEVICE_WIDTH * 0.95,
    height: 200,
    position: "absolute",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
  },

  contentContainer: {
    marginTop: 200,
  },

  headline: {
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  source: {
    color: "grey",
    fontSize: 12,
    marginBottom: 5,
  },
})

ArticleItem.defaultProps = {
  article: {
    web_url: "https://nytimes.com",
    snippet: "article_snippet",
    source: "article_source",
    multimedia: [
      {
        url:
          "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
      },
    ],
    headline: {
      main: "article_headline",
    },
    _id: "article_id",
  },
}

export default ArticleItem
