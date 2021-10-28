import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PokeApiService } from '../service/poke-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private currRoute: ActivatedRoute, private pokeService: PokeApiService,  private router: Router, public auth: AuthService) { }

  ngOnInit(): void {

  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup', appState: { target: '/buffer' } });
  }
}
