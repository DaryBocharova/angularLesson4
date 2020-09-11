import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson/lesson.component';
import { RaitingComponent } from './raiting/raiting/raiting.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    RaitingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
