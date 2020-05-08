import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Category from '../../models/Category';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

    @Input() private element: Category;
    @Output() private state: boolean;
    @Output() toggled: EventEmitter<{element: Category, state: boolean}> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.state = false;
    }

    switch() {
        this.state = !this.state;
        this.toggled.emit({element: this.element, state: this.state});
    }

}
