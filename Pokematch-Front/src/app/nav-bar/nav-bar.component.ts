import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PokeApiService } from '../service/poke-api.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document, private pokeService: PokeApiService) { }

  ngOnInit(): void {

  }

  login(): void {

    this.auth.loginWithRedirect({ appState: { target: '/elements' } });

  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
