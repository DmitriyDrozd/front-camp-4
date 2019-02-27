import {IArticle} from "./iarticle";

export interface INewsResponse {
  articles: IArticle[];
  status: string;
  totalResults: number;
}
