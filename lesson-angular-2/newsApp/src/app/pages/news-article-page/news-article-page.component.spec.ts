import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticlePageComponent } from './news-article-page.component';

describe('NewsArticlePageComponent', () => {
  let component: NewsArticlePageComponent;
  let fixture: ComponentFixture<NewsArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
