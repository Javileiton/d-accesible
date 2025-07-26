import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiNoButtonsGroupComponent } from './shared/components/si-no-buttons-group/si-no-buttons-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';


@NgModule({
  declarations: [AppComponent, SiNoButtonsGroupComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
