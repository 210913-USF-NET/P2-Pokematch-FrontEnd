import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../service/poke-api.service';
import { AuthService } from '@auth0/auth0-angular';
import { user } from '../models/user';
import { match } from '../models/match';
import { elementAt } from 'rxjs/operators';
import { Router } from '@angular/router';

var aUser: user = {
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

@Component({
  selector: 'app-match',
  templateUrl: './get-match.component.html',
  styleUrls: ['./get-match.component.css']
})

export class GetMatchComponent implements OnInit {
  

  userlist: user[] = [];

  constructor(private router: Router, private auth: AuthService, private pokeService: PokeApiService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(profile => {
      this.pokeService.getUserList().then(r => {
        r.forEach(user => {
          if (profile.email == user.email) {
            this.pokeService.getUserById(user.id).then(e => {
              aUser = e
            })
          }
        });
        this.GetUserOfType()
      })
    })
  }

    GetUserOfType() {
      let count = 0;
      this.userlist = [];

      this.pokeService.getUserList().then(r => {
        r.forEach(user => {
          let isMatched: boolean = false;
          aUser.matches.forEach(e => {
            if(e.userId2 == user.id)
            {
              isMatched = true;
            }
          });
          if(!isMatched && user.elementId == aUser.elementId && user.id != aUser.id && (user.gender == aUser.interest || aUser.interest == "o") && (user.interest == aUser.gender || user.interest == "o"))
          {
            this.userlist[count] = user;
            count++;
          };
        });
      })
    }

    GetUserOfPokemon() {
      let count = 0;
      this.userlist = [];
      this.pokeService.getUserList().then(r => {
        r.forEach(user => {
          let isMatched: boolean = false;
          aUser.matches.forEach(e => {
            if(e.userId2 == user.id)
            {
              isMatched = true;
            }
          });
          if(!isMatched && user.elementId == aUser.elementId && user.id != aUser.id && (user.gender == aUser.interest || aUser.interest == "o") && (user.interest == aUser.gender || user.interest == "o"))
          {
            if(user.pokemons[0] == aUser.pokemons[0] || user.pokemons[0] == aUser.pokemons[1] || user.pokemons[0] == aUser.pokemons[2])
            {
              this.userlist[count] = user;
              count++;
            }
            else if(user.pokemons[1] == aUser.pokemons[0] || user.pokemons[1] == aUser.pokemons[1] || user.pokemons[1] == aUser.pokemons[2])
            {
              this.userlist[count] = user;
              count++;
            }
            else if(user.pokemons[2] == aUser.pokemons[0] || user.pokemons[2] == aUser.pokemons[1] || user.pokemons[2] == aUser.pokemons[2])
            {
              this.userlist[count] = user;
              count++;
            }
          }
        });
      })
    }


    Match(matchUser: user) {
      console.log(matchUser);
      let match: match = {
        name: aUser.username,
        userId: aUser.id, 
        userId2: matchUser.id, 
        messages: []
      }
      this.pokeService.AddMatch(match);
      console.log(match)

      this.router.navigate(['get-match'])
    }


}
