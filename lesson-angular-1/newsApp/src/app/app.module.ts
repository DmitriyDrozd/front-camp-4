import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsLineComponent } from './news-line/news-line.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { NewsLineArticleComponent } from './news-line-article/news-line-article.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { ArticleFormComponent } from './article-form/article-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsLineComponent,
    SubHeaderComponent,
    NewsLineArticleComponent,
    NewsArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
