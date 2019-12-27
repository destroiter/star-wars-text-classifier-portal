import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServerService } from '../share/server.service';
import { ArticleFullRecordResponse } from '../share/responses/article-full-record.response';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public article: ArticleFullRecordResponse | null = null;

  constructor(
    private route: ActivatedRoute,
    private serverService: ServerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.serverService.getArticle({ id: params.articleId })
        .subscribe(response => this.article = response.article);
    });
  }
}
