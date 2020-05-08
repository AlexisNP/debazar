import { Component, OnInit, Input } from '@angular/core';
import Category from 'src/app/global/models/Category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    @Input() active: boolean;
    @Input() categories: Category[];

    constructor() {
        this.active = false;
    }

    ngOnInit() {
        
    }

}
