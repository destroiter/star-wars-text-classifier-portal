import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassifierComponent } from './classifier/classifier.component';
import { ServerService } from './share/server.service';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article.component';
import { TextClassNamePipe } from './share/pipes/text-class-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClassifierComponent,
    ArticlesComponent,
    ArticleComponent,
    TextClassNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
