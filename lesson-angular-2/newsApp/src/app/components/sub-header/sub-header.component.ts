import { Component, OnInit } from '@angular/core';
import {SourceService} from "../../services/Source/source.service";
import {TitleService} from "../../services/Title/title.service";
import {Router} from "@angular/router";
import {ISource} from "../../interfaces/isource";
import {KeywordSearchService} from "../../services/Keyword-search/keyword-search.service";

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  public sources: ISource[] = [];
  public filterKeywords: string = '';

  constructor(
    private router: Router,
    private sourceService: SourceService,
    private titleService: TitleService,
    private keywordSearchService: KeywordSearchService,
  ) { }

  ngOnInit() {
    this.sourceService.getAll()
      .subscribe((data: ISource[]) => { this.sources = data; });
  }

  onChangeSource(sourceName: string) {
    this.titleService.setTitle(sourceName);
  }

  onChangeRoute(routeName: string) {
    this.router.navigateByUrl(routeName);
  }

  onKeywordsChange(keywords: string) {
    this.keywordSearchService.updateKeywords(keywords);
  }

}
