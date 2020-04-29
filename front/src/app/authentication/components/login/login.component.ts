import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/Authentication/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    public submitted: Boolean;
    public loading: Boolean;
    public returnUrl: string;
    public emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    public wrongIds: Boolean;

    constructor( private route: ActivatedRoute, private router: Router, private auth: AuthService, private titleService: Title) {
        this.titleService.setTitle("Connexion - Débazar");
        this.loginForm = new FormGroup({
            login_mail: new FormControl('', [
                Validators.required,
                Validators.pattern(this.emailPattern)
            ]),
            login_password: new FormControl('', Validators.required),
        })
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() {
        return this.loginForm.controls;
    }

    public data = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    })

    ngOnInit() {
        this.resetChecker();
    }

    resetChecker() {
        this.loading = true;
        this.submitted = false;
        this.wrongIds = false;
    }

    onSubmit() {
        this.resetChecker();

        this.submitted = true;

        if(this.loginForm.invalid) {
            return;
        }

        this.data.get('email').setValue(this.loginForm.get('login_mail').value);
        this.data.get('password').setValue(this.loginForm.get('login_password').value);

        setTimeout(() => {
            this.auth.loginUser(this.data.value);
            setTimeout(() => {
                if(sessionStorage.getItem('username')) {
                    if (this.auth.redirectUrl != null && this.auth.redirectUrl != undefined) {
                        this.router.navigate([this.auth.redirectUrl]);
                    } else {
                        this.router.navigate(['']);
                    }
                } else {
                    this.wrongIds = true;
                }
            }, 2000);
        }, 1000);
    }
}
