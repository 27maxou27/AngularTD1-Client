import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  pseudo : string
  ln : string
  fn : string
  submitted: boolean = false;
  

  loginForm = new FormGroup ({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    
  });

  get f() { return this.loginForm.controls; }


  constructor(private loginService : LoginService) { }

  ngOnInit() {
    var user = this.loginService.currentUserValue;

    this.pseudo = user.pseudo;
    this.fn = user.prenom;
    this.ln = user.nom;
  }
  onSubmit() {
    this.loginService.edit(this.f.prenom.value,this.f.nom.value,this.f.token.value);
    }

}
