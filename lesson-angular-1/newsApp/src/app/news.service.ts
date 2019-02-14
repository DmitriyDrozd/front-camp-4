import { Injectable } from '@angular/core';
import { news } from '../mocks/news';
import {IArticle} from "./iarticle";
import {LOCAL_ENDPOINT} from '../assets/constants';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // private news: IArticle[] = [];
  private localEndpoint: string;

  constructor(private http: HttpClient) {
    this.localEndpoint = `${LOCAL_ENDPOINT}/news`;
  }

  getAll () {
    return this.http.get(this.localEndpoint);
  }

  getByUrl (url: string) {
    return this.http.get(`${this.localEndpoint}/${url}`);
  }
}
