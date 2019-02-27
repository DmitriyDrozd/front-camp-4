import {Component, Input} from '@angular/core';
import {IArticle} from "../../interfaces/iarticle";

@Component({
  selector: 'app-news-line',
  templateUrl: './news-line.component.html',
  styleUrls: ['./news-line.component.scss']
})
export class NewsLineComponent {

  @Input() articles: IArticle[] = [];
  @Input() userName: string;

  constructor() {
  }

  isCreator(author: string) {
    return this.userName === author;
  }

}
