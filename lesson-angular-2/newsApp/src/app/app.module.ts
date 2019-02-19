import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
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

@NgModule({
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
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
