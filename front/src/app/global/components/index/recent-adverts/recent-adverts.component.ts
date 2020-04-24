import { Component, OnInit, Input } from '@angular/core';

import Advert from 'src/app/global/models/Advert';

@Component({
  selector: 'app-recent-adverts',
  templateUrl: './recent-adverts.component.html',
  styleUrls: ['./recent-adverts.component.scss']
})
export class RecentAdvertsComponent implements OnInit {

    @Input() private adverts: Advert[];

    constructor() {
        
    }

    ngOnInit() {

    }

}
