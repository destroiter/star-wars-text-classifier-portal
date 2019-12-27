import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClassifierComponent } from './classifier/classifier.component';
import { ArticleListComponent } from './articles/article-list.component';
import { ArticleComponent } from './articles/article.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: '',
            children: [
                {
                  path: '',
                  redirectTo: 'classify',
                  pathMatch: 'full'
                },
                {
                  path: 'classify',
                  component: ClassifierComponent
                },
                {
                  path: 'articles',
                  children: [
                    {
                      path: '',
                      redirectTo: 'all',
                      pathMatch: 'full'
                    },
                    {
                      path: 'all',
                      component: ArticleListComponent
                    },
                    {
                      path: 'id',
                      children: [
                        {
                          path: ':articleId',
                          component: ArticleComponent
                        }
                      ]
                    }
                  ]
                },
                {
                  path: '**',
                  redirectTo: 'classify',
                  pathMatch: 'full'
                }
            ]
        }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
