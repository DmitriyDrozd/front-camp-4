import { Component, OnInit } from '@angular/core';
import {IArticle} from "../iarticle";
import {NewsService} from "../news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  public data: IArticle;
  public isCreator: boolean = false;

  private userName: string = 'Dzmitryi Drozd';

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const url: string = params.url;

      this.data = this.newsService.getByUrl(url);
      this.isCreator = this.data.author === this.userName;
    })
  }

}
