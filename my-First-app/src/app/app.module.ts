import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './Server/Server.Component';
import { ServersComponent } from './servers/servers.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { warningAlertComponent } from './warning-alert/warning-alert.Component';
import { PractiseComponent } from './practise/practise.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SucessAlertComponent,
    warningAlertComponent,
    PractiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
