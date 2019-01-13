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
declare module "react-native-dotenv"

interface BookDetail {
  title: string
  description: string
  author: string
  publisher: string
  primary_isbn13: string
}

interface ISBN {
  isbn10: string
  isbn13: string
}

interface BookResult {
  amazon_product_url: string
  book_details: BookDetail[]
  isbns: ISBN[]
}

interface BooksResponse {
  status: string
  copyright: string
  num_results: number
  last_modified: Date
  results: BookResult[]
}
