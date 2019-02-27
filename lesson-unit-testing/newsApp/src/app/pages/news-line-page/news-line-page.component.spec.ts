import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLinePageComponent } from './news-line-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {news} from "../../../mocks/news";
import {KeywordFilterPipe} from "../../pipes/keyword-filter.pipe";
import {NewsLineComponent} from "../../components/news-line/news-line.component";
import {NewsLineArticleComponent} from "../../components/news-line-article/news-line-article.component";

describe('NewsLinePageComponent', () => {
  let component: NewsLinePageComponent;
  let fixture: ComponentFixture<NewsLinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [
        NewsLinePageComponent,
        KeywordFilterPipe,
        NewsLineComponent,
        NewsLineArticleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLinePageComponent);
    component = fixture.componentInstance;
    component.articles = news;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set special title for create / update page', () => {
    const checkArticles = () => {
      expect(component.articles.length).toEqual([].length);
    };

    component.titleService.subscribe(checkArticles);
    component.titleService.setTitle('Create Article');
  });

  it('should properly load more articles', () => {
    const prevCount = component.articles.length;

    const countArticles = () => {
        expect(component.articles.length).toBeGreaterThan(prevCount);
    };

    component.newsService.getMore()
      .subscribe(countArticles);
    component.onLoadMore();
  })
});
