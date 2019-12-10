import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authGuard: AuthGuard, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authGuard.logout();
    this.router.navigate(["/login"]);
  }

}
