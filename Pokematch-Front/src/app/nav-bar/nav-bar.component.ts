import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';

@Component({
selector: 'nav-bar',
templateUrl: './nav-bar.component.html',
styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

constructor(public auth: AuthService,
  @Inject(DOCUMENT) private doc: Document) { }

ngOnInit(): void {
}
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
