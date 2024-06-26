import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialPageComponent } from 'src/app/views/inicial-page/inicial-page.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
import { FormsModule } from '@angular/forms';
import { CoverPageComponent } from './views/cover-page/cover-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';// Importe o ReactiveFormsModule
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkPage3Component } from './views/work-page3/work-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialPageComponent,
    CoverPageComponent,
    AboutPageComponent,
    WorkPage3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
