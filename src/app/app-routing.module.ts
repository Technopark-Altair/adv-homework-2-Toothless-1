import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: 'article', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
