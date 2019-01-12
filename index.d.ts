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

interface BookDetail {
  title: string
  description: string
  author: string
  publisher: string
  primary_isbn13: string
}

interface Books {
  amazon_product_url: string
  book_details: BookDetail[]
}

interface BooksResponse {
  status: string
  copyright: string
  num_results: number
  last_modified: Date
  results: Books[]
}
