import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLineArticleComponent } from './news-line-article.component';

describe('NewsLineArticleComponent', () => {
  let component: NewsLineArticleComponent;
  let fixture: ComponentFixture<NewsLineArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLineArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLineArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
