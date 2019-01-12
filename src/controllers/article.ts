import api from "../service/api"
import { Alert } from "react-native"

const searchArticle = async (query: string): Promise<Article[] | null> => {
  try {
    const { data } = await api.get<ArticleSearchResponse>(
      "/search/v2/articlesearch.json",
      {
        params: {
          q: query,
        },
      },
    )
    if (data.status === "OK") {
      return data.response.docs.map((article) => {
        if (article.multimedia[0]) {
          article.multimedia[0].url = `https://static01.nyt.com/${
            article.multimedia[0].url
          }`
        }
        return article
      })
    } else {
      throw Error(data.status)
    }
  } catch (err) {
    Alert.alert("Error", err.message)
    return null
  }
}

export { searchArticle }
