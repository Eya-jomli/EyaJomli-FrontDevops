import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/Reservation';
import { ReservationService } from '../../reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showreservation',
  templateUrl: './showreservation.component.html',
  styleUrls: ['./showreservation.component.css']
})
export class ShowreservationComponent implements OnInit {
  show = false;
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.showReservations();
  }

  showReservations() {
    this.reservationService.findAll()
      .subscribe(
        data => {
          this.reservations = data;
          console.log('Reservations loaded successfully!', data);
        },
        error => {
          console.error('Error loading reservations:', error);
        }
      );
  }

  delete(id: any) {
    this.reservationService.deleteReservation(id).subscribe(
      () => {
        //alert('next')
        window.location.reload();
      },
      (err) => {
        let status = err.status;
        switch (status) {
          case 0: alert('server '); break;
          case 401: alert('unauthoriz '); break;
          case 404: alert('unauthoriz '); break;
        }
      }
    );
  }

  navigateToaddReservation() {
    this.router.navigate(['add']);
  }
}

/*  navigateToaddFoyer() {
    this.router.navigate(['add']);
  }

  delete(id:any){
    this.foyerService.deleteFoyer(id).subscribe(
      ()=>{
      //alert('next')
      window.location.reload();
      },
      (err)=>{
      let status=err.status;
      switch (status){
      case 0:alert('server ') ;break;
      case 401:alert('unauthoriz ') ;break;
      case 404:alert('unauthoriz ') ;break;
      }
      },
      );
      }
*/
