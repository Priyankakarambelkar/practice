import { ThreeService } from './three.service';
import { TwoService } from './two.service';
import { ProgressService } from './progress.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { SmComponent } from './sm/sm.component';
import { PanelComponent } from './panel.component';
import { ProgressComponent } from './progress.component';
import { OneService } from './one.service';

@NgModule({
  declarations: [
    AppComponent,
    SmComponent,
    PanelComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, ProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
