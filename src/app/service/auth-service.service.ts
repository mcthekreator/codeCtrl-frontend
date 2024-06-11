import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserInterface} from "../interface/user-interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  registerUser(userData: UserInterface): Observable<any> {
    const apiUrl = 'http://localhost:8080/api/register'; // Replace with your API endpoint
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // console.log(userData)
    console.log(headers)
    return this.http.post(apiUrl, userData, { headers });
  }

}
