import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticleFormComponent} from "./components/article-form/article-form.component";
import {NewsLinePageComponent} from "./pages/news-line-page/news-line-page.component";
import {NewsArticlePageComponent} from "./pages/news-article-page/news-article-page.component";
import {SubHeaderComponent} from "./components/sub-header/sub-header.component";

const routes: Routes = [
  {
    path: '',
    component: NewsLinePageComponent,
  },
  {
    path: '',
    component: SubHeaderComponent,
    outlet: 'sub-header',
    pathMatch: 'full',
  },
  {
    path: 'article/:url',
    component: NewsArticlePageComponent,
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
export class AppRoutingModule {
}
