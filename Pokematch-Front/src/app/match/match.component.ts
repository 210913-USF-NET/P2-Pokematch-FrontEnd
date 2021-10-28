import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../service/poke-api.service';
import { AuthService } from '@auth0/auth0-angular';
import { user } from '../models/user';
import { match } from '../models/match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  imgUrl:string

  users:user[] = []

  user: user = {
    id: 0,
    username: '',
    email: '',
    gender: '',
    interest: '',
    profilepic: '',
    element: '',

    matches: [],
    pokemons: [],
    
  };

  constructor(private router: Router, private auth: AuthService, private pokeService: PokeApiService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(profile => {
      this.pokeService.getUserList().then(r => {
        r.forEach(user => {
          if (profile.email == user.email) {
            this.pokeService.getUserById(user.id).then(e => {
              this.user = e
            })
          }
        });
      })
    })
  }

  goToMessage() {
    this.router.navigate(['message'])
  }
}
