import { Component, OnInit } from '@angular/core';
import {IArticle} from "../../interfaces/iarticle";
import {NewsService} from "../../services/News/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-article-page',
  templateUrl: './news-article-page.component.html',
  styleUrls: ['./news-article-page.component.scss']
})
export class NewsArticlePageComponent implements OnInit {

  public data: IArticle;

  private isCreator: boolean = false;
  private userName: string = 'Dzmitryi Drozd';

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const url: string = params.url;

      this.newsService.getByUrl(url)
        .subscribe((data: IArticle) => {
          this.data = data;
          this.isCreator = this.data.author === this.userName;
        });
    });
  }

}
