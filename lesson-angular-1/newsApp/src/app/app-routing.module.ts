import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsLineComponent } from "./news-line/news-line.component";
import { SubHeaderComponent } from "./sub-header/sub-header.component";
import { NewsArticleComponent } from "./news-article/news-article.component";
import { ArticleFormComponent } from "./article-form/article-form.component";

const routes: Routes = [
  {
    path: '',
    component: NewsLineComponent,
  },
  {
    path: '',
    component: SubHeaderComponent,
    outlet: 'sub-header',
    pathMatch: 'full',
  },
  {
    path: 'article/:url',
    component: NewsArticleComponent,
  },
  {
    path: 'create',
    component: ArticleFormComponent,
  },
  {
    path: 'edit/:url',
    component: ArticleFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
