import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class AuthService {

    public isLogged: boolean;
    public redirectUrl: string;
    baseUrl = environment.baseUrl;
    
    constructor(private http: HttpClient) {
        this.isLogged = false;
    }

    /**
     * 
     * @param user_data
     */
    public loginUser(user_data: any) {
        this.logoutUser();
        return this.http.post<any>(`${this.baseUrl}/user/login`, user_data).subscribe(data => {
            // console.log(data),
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
        this.isLogged = true;
    }

    public logoutUser() {
        this.isLogged = false;
        sessionStorage.clear();
    }
}
