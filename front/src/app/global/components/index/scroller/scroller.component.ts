import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent implements OnInit {

    @Input() prev_url: string;
    @Input() prev_title: string;
    @Input() next_url: string;
    @Input() next_title: string;
    @Input() page_url: string;
    @Input() page_title: string;

    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

    constructor() {
        
    }

    ngOnInit() {
    }

}
