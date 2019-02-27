import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsLineArticleComponent} from './news-line-article.component';
import {RouterTestingModule} from "@angular/router/testing";
import {news} from "../../../mocks/news";

describe('NewsLineArticleComponent', () => {
  let component: NewsLineArticleComponent;
  let fixture: ComponentFixture<NewsLineArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NewsLineArticleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLineArticleComponent);
    component = fixture.componentInstance;
    component.data = news[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
