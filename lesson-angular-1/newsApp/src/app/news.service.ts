import { Injectable } from '@angular/core';
import { news } from '../mocks/news';
import {IArticle} from "./iarticle";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: IArticle[] = [];

  constructor() {
    this.news = [...news];
  }

  getAll () {
    return this.news;
  }

  getByUrl (url: string) {
    return this.news.find(article => article.url === url);
  }
}
