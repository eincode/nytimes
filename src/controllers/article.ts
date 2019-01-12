import api from "../service/api"
import { Alert } from "react-native"

const searchArticle = async (query: string): Promise<Article | null> => {
  try {
    const { data } = await api.get<Article>("/search/v2/articlesearch.json", {
      params: {
        q: query,
      },
    })
    return data
  } catch (err) {
    Alert.alert("Error", err.message)
    return null
  }
}
