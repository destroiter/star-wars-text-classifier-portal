import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ArticleShortRecordResponse } from '../share/responses/article-short-record.response';
import { ServerService } from '../share/server.service';
import { TextClass } from '../share/text-class.enum';
import { TextClassNamePipe } from '../share/pipes/text-class-name.pipe';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles: ArticleShortRecordResponse[] | null = null;

  public textClasses: { value: string, name: string }[] = Object.values(TextClass)
    .map(textClass => ({ value: textClass.toLowerCase(), name: TextClassNamePipe.convert(textClass) }));

  public filterform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serverService: ServerService
  ) { }

  ngOnInit() {
    this.filterform = new FormGroup({
      'filterTextClassControl': new FormControl()
    });

    this.route.queryParams.subscribe((params: Params) => {
      const textClassParam: TextClass = params['class'];
      this.filterform.controls['filterTextClassControl'].setValue(textClassParam);
      this.serverService.getAllArticles({ class: textClassParam })
        .subscribe(response => this.articles = response.articles);
    });

    this.filterform.controls['filterTextClassControl'].valueChanges
      .subscribe((value: TextClass) => {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            class: value
          }
        });
      });
  }
}
