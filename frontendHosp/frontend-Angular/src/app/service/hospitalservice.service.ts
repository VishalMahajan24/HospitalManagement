import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Doctor } from '../model/doctor';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {

  private serverUrl:string = `http://localhost:8011`;  
  constructor(private httpClient:HttpClient) { }

   //error handling
   public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ``;
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error : ${error.error.message}`;
    }
    else {
      //server error
      errorMessage = `status : ${error.status}`;
    }
    return throwError(() => errorMessage);
  }

  //get all Doctor
  public getAllDoctors():Observable<Doctor[]>{
    let dataUrl:string = `http://localhost:8011/doctors`;
    return this.httpClient.get<Doctor[]>(dataUrl).pipe(catchError(this.handleError));
  }
   //get Doctor by nam
   public getDoctor(name:string):Observable<Doctor>{
     
    let dataUrl:string = `${this.serverUrl}/doctors/doctor/${name}`;
    return this.httpClient.get<Doctor>(dataUrl).pipe(catchError(this.handleError));
  }
  //create doctor
  public createDoctor(Dgroup: Doctor): Observable<Doctor> {
    let dataUrl: string = `${this.serverUrl}/doctors/doctor`;
    return this.httpClient.post<Doctor>(dataUrl, Dgroup).pipe(catchError(this.handleError));
  }
   //get Patient by id
   public getPatient(patient_id:number):Observable<Doctor>{
    let dataUrl:string = `${this.serverUrl}/patients/patient/${patient_id}`;
    return this.httpClient.get<Doctor>(dataUrl).pipe(catchError(this.handleError));
  }
  //create patient
  public CreatePatient(Pgroup:Patient): Observable<Patient> {
    let dataUrl: string = `${this.serverUrl}/patients/patient`;
    return this.httpClient.post<Patient>(dataUrl, Pgroup).pipe(catchError(this.handleError));
  }

}