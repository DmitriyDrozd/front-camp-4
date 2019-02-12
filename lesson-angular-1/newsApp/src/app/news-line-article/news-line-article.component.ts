import {Component, Input, OnInit} from '@angular/core';
import {IArticle} from "../iarticle";

@Component({
  selector: 'app-news-line-article',
  templateUrl: './news-line-article.component.html',
  styleUrls: ['./news-line-article.component.scss']
})
export class NewsLineArticleComponent implements OnInit {

  public isCreator: boolean = false;

  private readonly userName: string = 'Dzmitryi Drozd';

  @Input() data: IArticle;

  constructor() {}

  ngOnInit() {
    this.isCreator = this.data.author === this.userName;
  }

}
