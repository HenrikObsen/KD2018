import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HomeComponent } from './home/home.component';
import { PBoxComponent } from './p-box/p-box.component';
import { IBoxComponent } from './i-box/i-box.component';
import { OmOsComponent } from './om-os/om-os.component';
import { AktiviteterComponent } from './aktiviteter/aktiviteter.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    HomeComponent,
    PBoxComponent,
    IBoxComponent,
    OmOsComponent,
    AktiviteterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
