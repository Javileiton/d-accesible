import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiNoButtonsGroupComponent } from './shared/components/si-no-buttons-group/si-no-buttons-group.component';


@NgModule({
  declarations: [AppComponent, SiNoButtonsGroupComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
