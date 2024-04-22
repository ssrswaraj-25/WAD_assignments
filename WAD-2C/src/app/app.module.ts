import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
@NgModule({
declarations: [
routes
],
imports: [
BrowserModule,
routes,
FormsModule,
],
providers: [],
bootstrap: [routes]
})
export class AppModule { }