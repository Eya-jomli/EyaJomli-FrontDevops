import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { ShowreservationComponent } from './reservation/showreservation/showreservation.component';

const routes: Routes = [

  { path: 'add', component: ReservationComponent },
  { path: '', component:  ShowreservationComponent },
 // { path: 'update/:id', component: },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
