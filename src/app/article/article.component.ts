import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/models/article.model';
import { ArticleService } from 'src/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let id: number = +data.id;
      this.article = this.articleService.getArticle(id);
    });
  }
}
