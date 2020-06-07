import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    faSearch = faSearch;
    private searchForm: FormGroup;

    constructor( private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
        this.searchForm = new FormGroup({
            search_website: new FormControl('', Validators.required)
        })
    }

    get f() {
        return this.searchForm.controls;
    }

    public data = new FormGroup({
        search_string: new FormControl()
    })

    ngOnInit() {

    }

    onSubmit() {
        console.log(this.searchForm.get('search_website').value);
        this.router.navigate(['/recherche/' + this.searchForm.get('search_website').value])
        .then(() => {
            window.location.reload();
        });
    }

}
