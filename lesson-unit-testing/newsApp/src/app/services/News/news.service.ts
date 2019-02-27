import {EventEmitter, Injectable} from '@angular/core';
import {IArticle} from "../../interfaces/iarticle";
import {HttpClient} from "@angular/common/http";
import {NEWS, LOCAL_ENDPOINT} from '../../config/Endpoint';
import {INewsCache} from "../../interfaces/inews-cache";
import {INewsResponse} from "../../interfaces/inews-response";
import {URLServiceService} from "../URLService/urlservice.service";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly count: number = 5;
  private readonly randomQuery: string = 'hot';
  private readonly localEndpoint: string = `${LOCAL_ENDPOINT}/news`;
  private readonly endpointRandom: string = `${NEWS}&q=${this.randomQuery}&pageSize=${this.count}`;

  private lastEndpoint: string = '';
  private lastPage: number = 1;
  private lastSource: string = '';
  private endpoint: string = `${NEWS}&pageSize=${this.count}`;
  private newsCache: INewsCache = {};

  private newsEmitter: EventEmitter<IArticle[]> = new EventEmitter<IArticle[]>();
  private articleEmitter: EventEmitter<IArticle> = new EventEmitter<IArticle>();

  constructor(
    private http: HttpClient,
    private urlService: URLServiceService,
  ) {}

  getRandom() {
    this.lastPage = 1;

    const request = this.http.get(`${this.endpointRandom}&page=${this.lastPage}`);
    const source = 'random';

    request.subscribe((data: INewsResponse) => {
      this.lastEndpoint = this.endpointRandom;
      this.lastSource = source;
      this.newsCache[source] = data.articles;

      this.newsEmitter.emit(this.newsCache['random']);
    });

    return this.newsEmitter;
  }

  getAll() {
    const request = this.http.get(this.localEndpoint);
    const source = 'local';

    request.subscribe((data: IArticle[]) => {
      this.newsCache[source] = data;
      this.lastSource = source;
      this.lastEndpoint = this.localEndpoint;

      this.newsEmitter.emit(this.newsCache[source]);
    });

    return this.newsEmitter;
  }

  getBySource(source: string) {
    this.lastPage = 1;

    const endpoint = `${this.endpoint}&sources=${source}`;
    const request = this.http.get(`${endpoint}&page=${this.lastPage}`);

    request.subscribe((data: INewsResponse) => {
      this.newsCache[source] = data.articles;
      this.lastSource = source;
      this.lastEndpoint = endpoint;

      this.newsEmitter.emit(this.newsCache[source]);
    });

    return this.newsEmitter;
  }

  getMore() {
    this.lastPage += 1;

    const request = this.http.get(`${this.lastEndpoint}&page=${this.lastPage}`);
    const source = this.lastSource;

    request.subscribe((data: INewsResponse) => {
      this.newsCache[source] = [...this.newsCache[source], ...data.articles];

      this.newsEmitter.emit(this.newsCache[source]);
    });

    return this.newsEmitter;
  }

  getByUrl(url: string, isLocal: boolean = false) {
    if (isLocal) {
      const endpoint = `${this.localEndpoint}/${url}`;
      const request = this.http.get(endpoint);

      request.subscribe((data: IArticle) => {
        this.articleEmitter.emit(data);
      });

      return this.articleEmitter;
    }

    let article: IArticle;

    if (this.newsCache[this.lastSource]) {
      article = this.newsCache[this.lastSource].find((item: IArticle) => {
        const _url = this.urlService.getParsedTitle(item.title);

        return _url === url;
      });
    } else {
      article = {} as IArticle;
    }

    this.articleEmitter.emit(article);

    return this.articleEmitter;
  }

  subscribeToArticle(callback: (data: IArticle) => void) {
    this.articleEmitter.subscribe(callback);
  }
}
