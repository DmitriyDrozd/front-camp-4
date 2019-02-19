import {Component, OnDestroy, OnInit} from '@angular/core';
import {TitleService} from "../../services/Title/title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public title: string = 'News App';
  public imageUrl: string = '';

  private titleSubscription: any;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleSubscription = this.titleService.subscribe((newTitle: string) => {
        this.title = newTitle;
      });
  }

  ngOnDestroy() {
    this.titleSubscription.unsubcribe();
  }

}
