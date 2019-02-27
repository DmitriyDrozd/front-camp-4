import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NewsLineComponent} from './components/news-line/news-line.component';
import {SubHeaderComponent} from './components/sub-header/sub-header.component';
import {NewsLineArticleComponent} from './components/news-line-article/news-line-article.component';
import {NewsArticleComponent} from './components/news-article/news-article.component';
import {ArticleFormComponent} from './components/article-form/article-form.component';
import {HttpClientModule} from "@angular/common/http";
import {KeywordFilterPipe} from './pipes/keyword-filter.pipe';
import {NewsLinePageComponent} from './pages/news-line-page/news-line-page.component';
import { NewsArticlePageComponent } from './pages/news-article-page/news-article-page.component';
import {BrowserModule} from "@angular/platform-browser";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NewsLineComponent,
        SubHeaderComponent,
        NewsLineArticleComponent,
        NewsArticleComponent,
        ArticleFormComponent,
        KeywordFilterPipe,
        NewsLinePageComponent,
        NewsArticlePageComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('News App');
  });
});
