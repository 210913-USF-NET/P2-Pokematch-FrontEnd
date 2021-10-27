import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokeApiService } from '../service/poke-api.service';
import { user } from '../models/user';
import { AuthService } from '@auth0/auth0-angular';
import { message } from '../models/message';
var wtf: string;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public auth: AuthService, private currentRoute: ActivatedRoute, private UserService: PokeApiService) { }

  userlist: user[] = [];

  fromUser: string[] = [];

  msgBody: message[] = [];

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

  ngOnInit(): void {

    // on initialize, grab the ids of the current logged in user and the match of theirs
    // then, display their messages if any
    this.auth.user$.subscribe(
      (profile) => (wtf = profile.email),
    );
    this.UserService.getUserList().then(result => {
      this.userlist = result;
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == wtf) {
          this.user.id = this.userlist[i].id;
          this.UserService.getUserById(this.user.id).then(user => {
            this.UserService.getMatchList().then(match => {
              this.user = user;
              this.user.matches = match;
              for (let i = 0; i < this.user.matches.length; i++) {
                if (this.user.id == this.user.matches[i].userId)
                {
                  this.fromUser.push(this.user.matches[i].name);
                  this.user.matches[i] = match[i];
                  this.msgBody.push(this.user.matches[i].messages);
                }
              }
              console.log(match);
              console.log(user);
              console.log(this.msgBody);
            })
          });
        }
      }
    })
  }

}
