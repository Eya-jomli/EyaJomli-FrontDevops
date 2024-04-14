import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://192.168.1.43:8083'; // Assuming your backend API is running at this URL

  constructor(private http: HttpClient) { }


    findAll(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/reservation/getAllReservations`);
    }

    addReservation(reservation: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/reservation/addReservation`, reservation);
    }

    updateReservation(reservation: any): Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/reservation/updateReservation`, reservation);
    }

    deleteReservation(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/reservation/deleteReservation/${id}`);
    }

    findById(id: number): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/reservation/getByIdReservation/${id}`);
    }


}
