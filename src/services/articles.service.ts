import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Array<Article> = [
    { id: 0, header: 'Заголовок 1', description: 'Описание 1' },
    { id: 1, header: 'Заголовок 2', description: 'Описание 2' },
  ];
  constructor() {}

  getArticles() {
    return this.articles;
  }

  getArticle(id: number) {
    return this.articles.find((el) => el.id === id);
  }

  addArticle(article: Article) {
    article.id = this.getArticles().length;
    this.articles.push(article);
  }
}
