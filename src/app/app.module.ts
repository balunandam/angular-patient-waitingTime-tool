import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StandaloneComponent } from './standalone-component/standalone.componnent';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, StandaloneComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
