import { Component, OnInit } from '@angular/core';
import { UserService } from './global/services/user.service';
import { CategoryService } from './global/services/category.service';
import Category from './global/models/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private username: string;
    private categories: Category[];

    constructor(private userService: UserService, private categoryServ: CategoryService) {
        this.username = this.userService.getUser();
    }

    ngOnInit() {
        this.categoryServ.getAllCategories()
        .then(values => {
            this.categories = Object.values(values)
        })

    }

}
