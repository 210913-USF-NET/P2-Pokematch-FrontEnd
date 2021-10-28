import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokeApiService } from '../service/poke-api.service';
import { user } from '../models/user';
import { AuthService } from '@auth0/auth0-angular';
import { message } from '../models/message';
var wtf: string;


var user2: user = {
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
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  constructor(public auth: AuthService, private currentRoute: ActivatedRoute, private UserService: PokeApiService) { }

  userlist: user[] = [];

  fromUser: string[] = [];

  selectedUser: string;

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
    this.auth.user$.subscribe(
      (profile) => (wtf = profile.email),
    );
    this.UserService.getUserList().then(result => {
      this.userlist = result;
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == wtf) {
          this.user.id = this.userlist[i].id;
          this.UserService.getUserById(this.user.id).then(user => {
              this.user = user;
              for (let i = 0; i < this.user.matches.length; i++) {
                this.UserService.getUserById(this.user.matches[i].userId2).then(userSecond => {
                  console.log(userSecond);
                  user2 = userSecond;
                })
                console.log(user2)
                let isMatched: boolean = false;
                user2.matches.forEach(e => {
                  console.log(e.userId2)
                  console.log(user.id)
                  if(e.userId2 == this.user.id)
                  {
                    isMatched = true;
                  }
                })

                if (isMatched && this.user.id == this.user.matches[i].userId)
                {
                  this.fromUser.push(this.user.matches[i].name);
                }
              }
              this.selectedUser = this.fromUser[0];
              console.log(this.selectedUser);
              console.log(user);
              console.log(user.matches);
          });
        }
      }
    })
  }

  postMsg(): void{

  }

  selectUser(userName): void {
    this.selectedUser = userName;
  }
}
