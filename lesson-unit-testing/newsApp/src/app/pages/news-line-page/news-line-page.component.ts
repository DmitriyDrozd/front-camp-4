import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IArticle} from "../../interfaces/iarticle";
import {NewsService} from "../../services/News/news.service";
import {ActivatedRoute} from "@angular/router";
import {TitleService} from "../../services/Title/title.service";
import {KeywordSearchService} from "../../services/Keyword-search/keyword-search.service";

@Component({
  selector: 'app-news-line-page',
  templateUrl: './news-line-page.component.html',
  styleUrls: ['./news-line-page.component.scss']
})
export class NewsLinePageComponent implements OnInit {

  private isCreator: boolean = false;
  private userName: string = 'Dzmitryi Drozd';

  public articles: IArticle[] = [];
  public keywords: string[];

  constructor(
    public newsService: NewsService,
    private route: ActivatedRoute,
    public titleService: TitleService,
    private keywordSearchService: KeywordSearchService,
  ) { }

  ngOnInit() {
    this.newsService.getRandom()
      .subscribe(this.updateArticles);

    const title: string = 'News App';

    this.titleService.setTitle(title);

    this.titleService.subscribe((source: string) => {
      if (source !== 'Create Article' && source !== 'Edit Article' && source !== 'News App') {
        this.newsService.getBySource(source).subscribe(this.updateArticles);
      } else {
        this.articles = [];
      }
    });

    this.keywordSearchService.subscribe((keywords: string[]) => {
      this.keywords = keywords;
    })
  }

  onLoadMore() {
    this.newsService.getMore()
      .subscribe(this.updateArticles);
  }

  updateArticles = (data: IArticle[]) => {
    this.articles = data;
  }

}
