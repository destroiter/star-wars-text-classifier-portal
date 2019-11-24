import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClassifierComponent } from './classifier/classifier.component';
import { ArticlesComponent } from './articles/articles.component';
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
                      component: ArticlesComponent
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
