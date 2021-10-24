import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {user} from '../models/user';
import { UserApiService } from '../service/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private currRoute: ActivatedRoute, private userService:UserApiService,  private router: Router, public auth: AuthService) { }
  
  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (console.log(profile),
      console.log(profile.email))
    )
    ;
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }



}

