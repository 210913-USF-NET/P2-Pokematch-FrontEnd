import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public auth: AuthService) { }

  email = "";
  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (console.log(profile))
    )
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}
