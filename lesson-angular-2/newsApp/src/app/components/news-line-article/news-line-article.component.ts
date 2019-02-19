import {Component, Input, OnInit} from '@angular/core';
import {IArticle} from "../../interfaces/iarticle";

@Component({
  selector: 'app-news-line-article',
  templateUrl: './news-line-article.component.html',
  styleUrls: ['./news-line-article.component.scss']
})
export class NewsLineArticleComponent implements OnInit {

  @Input() data: IArticle;
  @Input() isControlsAvailable: boolean = false;

  constructor() {}

  ngOnInit() {}

}
