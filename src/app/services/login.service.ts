import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private apiUrl: string = "http://localhost:3000";
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedInUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(pseudo: string, password: string): Observable<any> {

  

    return this.httpClient.post<any>(this.apiUrl + "/login", { pseudo, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return (user);
      }))
  }

  edit(nom : string, prenom : string, token: string){
    return this.httpClient.post<any>(this.apiUrl + "/edit",{nom,prenom,token})
  }

  logout(): void {
    localStorage.removeItem("loggedInUser");
    this.currentUserSubject.next(null);
  }

}
