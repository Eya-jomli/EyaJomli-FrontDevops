import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  addForm: FormGroup = this.formBuilder.group({
    numReservation: ['', Validators.required],
    cinEtudiant: ['', Validators.required],
    anneeUniversitaire: ['', Validators.required],
    estValide: [true, Validators.required],
    TypeChambre: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form validity:', this.addForm.valid);
    if (this.addForm.valid) {
      this.reservationService.addReservation(this.addForm.value)
        .subscribe(
          data => {
            console.log('Reservation added successfully!', data);
            // Reset the form after successful submission
            this.addForm.reset();
          },
          error => {
            console.error('Error adding reservation:', error);
          }
        );
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
    }
  }
}
