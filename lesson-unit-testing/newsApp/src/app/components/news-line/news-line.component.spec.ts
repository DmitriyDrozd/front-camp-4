import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLineComponent } from './news-line.component';
import {news} from '../../../mocks/news';
import {NewsLineArticleComponent} from "../news-line-article/news-line-article.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('NewsLineComponent', () => {
  let component: NewsLineComponent;
  let fixture: ComponentFixture<NewsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NewsLineComponent, NewsLineArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLineComponent);
    component = fixture.componentInstance;
    component.articles = news;
    component.userName = 'Dzmitryi Drozd';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
