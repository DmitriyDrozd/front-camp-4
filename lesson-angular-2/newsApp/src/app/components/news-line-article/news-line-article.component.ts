import {Component, Input, OnInit} from '@angular/core';
import {IArticle} from "../../interfaces/iarticle";
import {URLServiceService} from "../../services/URLService/urlservice.service";

@Component({
  selector: 'app-news-line-article',
  templateUrl: './news-line-article.component.html',
  styleUrls: ['./news-line-article.component.scss']
})
export class NewsLineArticleComponent implements OnInit {

  @Input() data: IArticle;
  @Input() isControlsAvailable: boolean = false;

  public url: string;

  constructor(private urlService: URLServiceService) {}

  ngOnInit() {
    if (this.data) {

      this.url = this.urlService.getUrl(this.data.url, this.data.title);
    }
  }

}
