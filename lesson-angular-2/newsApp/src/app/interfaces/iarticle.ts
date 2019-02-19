export interface IArticle {
  title: string,
  description: string,
  content?: string,
  created?: any,
  publishedAt?: string,
  source?: {
    id: string,
    name: string,
  },
  author: string,
  url: string,
  urlToImage?: string,
}
