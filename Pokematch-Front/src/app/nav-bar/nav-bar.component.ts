import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { user } from '../models/user';
import { PokeApiService } from '../Service/poke-api.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  profpic: string;
  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document, private pokeService: PokeApiService, private UserService: PokeApiService) { }

    userlist: user[] = [];

    user: user = {
      id: 0,
      username: '',
      email: '',
      gender: '',
      interest: '',
      profilepic: '',
      pokemons: '',
      element: []
    };
  ngOnInit(): void {

  }

  login(): void {

    this.auth.loginWithRedirect({ appState: { target: '/buffer' } });

  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
