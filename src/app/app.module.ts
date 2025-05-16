import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tab1Component } from './tab1/tab1.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
    declarations: [
        AppComponent,
        Tab1Component,
        ArticleComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
