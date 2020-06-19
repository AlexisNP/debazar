import { Component, OnInit } from '@angular/core';

import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    faFacebookSquare = faFacebookSquare;
    faInstagramSquare = faInstagramSquare;

    constructor() {
        
    }

    ngOnInit() {

    }

}
