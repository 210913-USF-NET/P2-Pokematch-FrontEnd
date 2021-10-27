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
                // if user2 matches this.user.matches
                // then push the user name matches into fromUser
                if (this.user.id == this.user.matches[i].userId)
                { //instead of this ^^^^
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
    // run logic where it will replace matches.message with the selected user name
  }
}
