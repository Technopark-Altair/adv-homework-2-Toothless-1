import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent implements OnInit {
  article: Article;
  @Output() addedNewArticle = new EventEmitter<Article>();
  constructor() {}
  ngOnInit(): void {
    this.article = new Article();
  }

  addArticleInArticlesComponent() {
    this.addedNewArticle.emit(this.article);
    this.article = new Article();
  }
}
