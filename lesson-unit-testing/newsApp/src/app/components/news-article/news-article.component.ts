import {Component, Input} from '@angular/core';
import {IArticle} from "../../interfaces/iarticle";
@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent {

  @Input() article: IArticle;
  @Input() isControlsAvailable: boolean = false;

  constructor() { }

}
