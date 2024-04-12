import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reservation } from './models/Reservation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { ShowreservationComponent } from './reservation/showreservation/showreservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ShowreservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Reservation],
  bootstrap: [AppComponent]
})
export class AppModule { }
