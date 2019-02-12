import { Component, OnInit } from '@angular/core';
import {SourceService} from "../source.service";
import {TitleService} from "../title.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  public sources: string[] = [];

  constructor(
    private router: Router,
    private sourceService: SourceService,
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.sources = this.sourceService.getAll();
  }

  onChangeSource(sourceName: string) {
    this.titleService.getEmit().emit(sourceName);
  }

  onChangeRoute(routeName: string) {
    this.router.navigateByUrl(routeName);
  }

}
