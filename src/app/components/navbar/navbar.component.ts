import { Component, OnInit } from '@angular/core';

import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authGuard: AuthGuard) { }

  ngOnInit() {
  }

}
