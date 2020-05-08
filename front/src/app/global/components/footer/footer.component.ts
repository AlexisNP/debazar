import { Component, OnInit } from '@angular/core';

import { faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    faTwitterSquare = faTwitterSquare;
    faFacebookSquare = faFacebookSquare;
    faInstagramSquare = faInstagramSquare;

    constructor() {
        
    }

    ngOnInit() {

    }

}
