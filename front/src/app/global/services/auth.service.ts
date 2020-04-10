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
        return this.http.get<any>(`${this.baseUrl}/user/login`, user_data.value).subscribe(data => {
            data = user_data;
            // console.log(data);
          }, error => {console.log('Error', error);
        });
    }

    public registerUser(user_data: any) {
        return this.http.get<any>(`${this.baseUrl}/user/register`, user_data.value).subscribe(data => {
            data = user_data;
            // console.log(data);
          }, error => {console.log('Error', error);
        });
    }

    public logoutUser() {
        localStorage.removeItem('loggedUser');
    }

}
