import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import User from '../models/User';


@Injectable({ providedIn: 'root' })

export class AuthService {

    private loggedUserSubject: BehaviorSubject<User>
    private loggedUser: Observable<User>
    
    constructor(private http: HttpClient) {

    }

}
