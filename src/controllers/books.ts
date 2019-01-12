import api from "../service/api"
import { Alert } from "react-native"

const getBooksByListName = async (
  listName: string,
): Promise<Books[] | null> => {
  try {
    const { data } = await api.get<BooksResponse>("/books/v3/lists.json", {
      params: {
        list: listName,
      },
    })
    return data.results
  } catch (err) {
    Alert.alert("Error", err.message)
    return null
  }
}

export { getBooksByListName }
