import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import '@angular/localize/init';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentesLanding/navbar/navbar.component';
import { PortadaComponent } from './componentesLanding/portada/portada.component';
import { FooterComponent } from './componentesLanding/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
