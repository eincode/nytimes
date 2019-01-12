import api from "../service/api"
import { Alert } from "react-native"

interface IParams {
  q: string
  sort?: string
}

const searchArticle = async (
  query: string,
  sortMethod?: string,
): Promise<Article[] | null> => {
  const params: IParams = {
    q: query,
  }
  if (sortMethod !== "default") {
    params.sort = sortMethod
  }
  try {
    const { data } = await api.get<ArticleSearchResponse>(
      "/search/v2/articlesearch.json",
      {
        params,
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
