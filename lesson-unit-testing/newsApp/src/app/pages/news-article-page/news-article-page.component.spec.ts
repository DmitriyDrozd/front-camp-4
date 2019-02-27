import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticlePageComponent } from './news-article-page.component';
import {NewsArticleComponent} from "../../components/news-article/news-article.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {news} from "../../../mocks/news";

describe('NewsArticlePageComponent', () => {
  let component: NewsArticlePageComponent;
  let fixture: ComponentFixture<NewsArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ NewsArticleComponent, NewsArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticlePageComponent);
    component = fixture.componentInstance;
    component.data = news[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
