import { Component, OnInit } from '@angular/core';
import {TitleService} from "../title.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const url: string = params.url;
      const isCreateMode: boolean = !url;
      const title: string = isCreateMode ? 'Create Article' : 'Edit Article';

      this.titleService.getEmit().emit(title);
    });
  }

  preventSubmit(e) {
    e.preventDefault();
  }

  onSave(article) {
    alert('Article has been saved.');
  }
}
