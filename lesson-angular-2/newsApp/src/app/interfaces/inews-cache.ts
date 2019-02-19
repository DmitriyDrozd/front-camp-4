import {IArticle} from "./iarticle";

export interface INewsCache {
  [source: string]: IArticle[];
}
