import axios, { AxiosInstance } from "axios"
import { API_KEY } from "react-native-dotenv"

class API {
  public client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: "https://api.nytimes.com/svc",
    })
    this.client.defaults.params = {}
    this.client.defaults.params["api-key"] = API_KEY
  }
}

const api = new API()

export default api.client
