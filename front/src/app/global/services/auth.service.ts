import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import User from '../models/User';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private userTest: User;
    baseUrl = environment.baseUrl;
    
    constructor(private http: HttpClient) {
        this.userTest = new User("LE TUEUR.", "Dylan", "Jean-Pierre", "35.alexis.pele@gmail.com", "None", null, "#000", true, false, "PASSWORD");
    }

    /**
     * 
     * @param user_data
     */
    public loginUser(user_data: any) {
        this.logoutUser();
        console.log('2', user_data);
        return this.http.post<any>(`${this.baseUrl}/user/login`, user_data).subscribe(data => {
            console.log('3', data),
            this.authenticate(data);
            data = user_data;
          }, error => {console.log('Error', error);
        });
    }

    public registerUser(user_data: any) {
        console.log('2', user_data);
        return this.http.post<any>(`${this.baseUrl}/user/register`, user_data).subscribe(data => {
            // console.log(data),
            data = user_data;
          }, error => {console.log('Error', error);
        });
    }

    public authenticate(data: any) {
        if (data !== null) {
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('gamebox', data.gamebox);
            sessionStorage.setItem('verified', data.verified);
            sessionStorage.setItem('banned', data.banned);
        }
    }

    public logoutUser() {
        sessionStorage.clear();
        // localStorage.removeItem('loggedUser');
    }

}
