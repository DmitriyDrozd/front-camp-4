import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLinePageComponent } from './news-line-page.component';

describe('NewsLinePageComponent', () => {
  let component: NewsLinePageComponent;
  let fixture: ComponentFixture<NewsLinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
