import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    remember: new FormControl('')
  });

  get f() { return this.loginForm.controls; }

  returnUrl: string;
  submitted: boolean = false;
  loading: boolean = false;
  alert : boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.loginService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          console.log(data);
          // Save user info...
          this.router.navigate(["/home"]);
        },
        err => {
          // TODO: Handle error...
          this.submitted = false;
          this.loading = false;
          this.f.username.setErrors({'incorrect': true});
          this.f.password.setErrors({'incorrect': true});

          this.alert = true;
          setTimeout(() => { this.alert = false; }, 5000);
        }
      );
  }
}