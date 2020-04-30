import { Component } from '@angular/core';
import { UserService } from './global/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private username: string;

    constructor(private userService: UserService) {
        this.username = this.userService.getUser();
    }

}
