import {Component, OnInit} from '@angular/core';
import { IArticle } from "../iarticle";
import {NewsService} from "../news.service";
import {ActivatedRoute} from "@angular/router";
import {TitleService} from "../title.service";

@Component({
  selector: 'app-news-line',
  templateUrl: './news-line.component.html',
  styleUrls: ['./news-line.component.scss']
})
export class NewsLineComponent implements OnInit {

  // @Output() loadMore: EventEmitter<null> = new EventEmitter<null>();

  public articles: IArticle[] = [];

  private loadMore: () => {};

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.articles = this.newsService.getAll();

    this.route.data.subscribe(data => {
      this.loadMore = data.loadMore;
    });

    // FIXME: solution until real API is connected
    const title: string = 'News App';
    this.titleService.getEmit().emit(title);
  }

  onLoadMore() {
    this.loadMore();
  }

}
