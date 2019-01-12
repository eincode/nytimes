import axios, { AxiosInstance } from "axios"

class API {
  public client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: "https://api.nytimes.com/svc",
    })
    this.client.defaults.params = {}
    this.client.defaults.params["api-key"] =
      "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
  }
}

const api = new API()

export default api.client
