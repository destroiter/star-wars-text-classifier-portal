import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ClassifyRequest } from './requests/classify.request';
import { ClassifyResponse } from './responses/classify.response';
import { AllArticlesResponse } from './responses/all-articles.response';
import { ArticleResponse } from './responses/article.response';
import { ArticleRequest } from './requests/article.request';
import { AllArticlesRequest } from './requests/all-articles.request';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private serverUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
      this.serverUrl = environment.serverUrl;
  }

  public classify(request: ClassifyRequest): Observable<ClassifyResponse> {
    return this.httpClient.post<ClassifyResponse>(this.serverUrl + 'classification/classify', request);
  }

  public getAllArticles(request: AllArticlesRequest): Observable<AllArticlesResponse> {
    let param = '';
    if (request.class != null) {
      param = '?class=' + request.class;
    }
    return this.httpClient.get<AllArticlesResponse>(this.serverUrl + 'articles/all' + param);
  }

  public getArticle(request: ArticleRequest): Observable<ArticleResponse> {
    return this.httpClient.get<ArticleResponse>(this.serverUrl + 'articles/id/' + request.id);
  }
}
