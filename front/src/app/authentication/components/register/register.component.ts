import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/Authentication/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    private registerForm: FormGroup;
    private submitted = false;
    private loading = true;
    private returnUrl: string;
    private emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    private step: number;

    private topinc: number = 0;
    private botinc: number = 0;


    constructor( private route: ActivatedRoute, private router: Router, private auth: AuthService, private titleService: Title) {
        this.titleService.setTitle("Inscription - Débazar");
        this.registerForm = new FormGroup({
            register_first_name: new FormControl('', Validators.required),
            register_last_name: new FormControl('', Validators.required),
            register_mail: new FormControl('', [
                Validators.required,
                Validators.pattern(this.emailPattern)
            ]),
            register_mail_check: new FormControl('', [
                Validators.required,
                Validators.pattern(this.emailPattern)
            ]),
            register_pseudo: new FormControl('', Validators.required),
            register_password: new FormControl('', Validators.required),
            register_password_check: new FormControl('', Validators.required),
            register_address: new FormControl('', Validators.required),
            register_city: new FormControl('', Validators.required),
            register_phone: new FormControl('', Validators.required),
            register_avatar: new FormControl(''),
        })
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() {
        return this.registerForm.controls;
    }

    public data = new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl(),
        mailAddress: new FormControl(),
        matchingMail: new FormControl(),
        username: new FormControl(),
        password: new FormControl(),
        matchingPassword: new FormControl(),
        address: new FormControl(),
        city: new FormControl(),
        phone: new FormControl(),
        avatar: new FormControl(),
    })

    ngOnInit() {
        this.step = 1;
    }

    onSubmit() {
        this.data.get('firstname').setValue(this.registerForm.get('register_first_name').value);
        this.data.get('lastname').setValue(this.registerForm.get('register_last_name').value);
        this.data.get('mailAddress').setValue(this.registerForm.get('register_mail').value);
        this.data.get('matchingMail').setValue(this.registerForm.get('register_mail_check').value);
        this.data.get('username').setValue(this.registerForm.get('register_pseudo').value);
        this.data.get('password').setValue(this.registerForm.get('register_password').value);
        this.data.get('matchingPassword').setValue(this.registerForm.get('register_password_check').value);
        this.data.get('address').setValue(this.registerForm.get('register_address').value);
        this.data.get('city').setValue(this.registerForm.get('register_city').value);
        this.data.get('phone').setValue(this.registerForm.get('register_phone').value);
        setTimeout(() => {
            // console.log("inscription");
            // console.log(this.data.value);
            this.auth.registerUser(this.data.value);
            setTimeout(() => {
                this.router.navigate(['']);
            }, 2000);
        }, 1000);
    }

    step1() {
        this.step = 1;
    }

    step2() {
        this.step = 2;
    }

    step3() {
        this.step = 3;
    }

    mouseWheelUpFunc() {
        this.botinc = 0;
        if (window.scrollY == 0) {
            this.topinc++;
            if (this.topinc >= 7) {
                if (this.step > 0) {
                    this.step--;
                }
                this.topinc = 0;
            }
        } else {
            this.topinc = 0;
        }
        console.log(this.step, this.topinc)
    }

    mouseWheelDownFunc() {
        this.topinc = 0;
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            this.botinc++;
            if (this.botinc >= 7) {
                if (this.step <= 2) {
                    this.step++;
                }
                this.botinc = 0;
            }
        } else {
            this.botinc = 0;
        }
        console.log(this.step, this.botinc)

    }
}
