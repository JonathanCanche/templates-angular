import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NofoundComponent } from './components/nofound/nofound.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoaderComponent,
    NofoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
