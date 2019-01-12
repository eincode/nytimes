interface ArticleSearchResponse {
  status: string
  copyright: string
  response: Response
}

interface Response {
  docs: Article[]
}

interface Article {
  web_url: string
  snippet: string
  source: string
  multimedia: Multimedia[]
  headline: Headline
  _id: string
}

interface Headline {
  main: string
}

interface Multimedia {
  url: string
}

declare module "*.png"
