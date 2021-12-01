import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbuttonComponent } from './topbutton/topbutton.component';
import { DownbuttonComponent } from './downbutton/downbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbuttonComponent,
    DownbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
