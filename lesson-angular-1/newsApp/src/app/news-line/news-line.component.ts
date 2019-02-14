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

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.newsService.getAll()
      .subscribe((data: IArticle[]) => { this.articles = data; });

    const title: string = 'News App';
    this.titleService.getEmit().emit(title);
  }

  onLoadMore() { }

}
