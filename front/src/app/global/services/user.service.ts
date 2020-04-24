import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private username: string;

    constructor() {
        this.username = '';
    }

    public setUser() {
        if (sessionStorage.getItem('username')) {
            this.username = sessionStorage.getItem('username');
        }
    }

    public getUser(): string {
        console.log(this.username);
        return this.username;
    }

}
