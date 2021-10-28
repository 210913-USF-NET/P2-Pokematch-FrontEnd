import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokeApiService } from '../service/poke-api.service';
import { user } from '../models/user';
import { AuthService } from '@auth0/auth0-angular';
import { message } from '../models/message';
import { match } from '../models/match';
var globalEmail: string;




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
  selectedUserId: number;
  selectedUserBody: message[];

  myUser: string;
  myUserId: number;
  myUserBody: message[];

  matchList: match[];

  message: message = {
    toUser: '',
    fromUser: '',
    send: '',
    matchId: 0
  };

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

  user2: user = {
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
      (profile) => (globalEmail = profile.email),
    );
    this.UserService.getUserList().then(result => {
      this.userlist = result;
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == globalEmail) {
          this.user.id = this.userlist[i].id;
          this.UserService.getUserById(this.user.id).then(user => {
              this.user = user;

              for (let i = 0; i < this.user.matches.length; i++) {
                this.UserService.getUserById(this.user.matches[i].userId2).then(userSecond => {
                  this.user2 = userSecond;
                  let isMatched: boolean = false;
                  this.user2.matches.forEach(e => {
                  if(e.userId2 == this.user.id)
                  {
                    isMatched = true;
                  }
                  })

                  if (isMatched && this.user.id == this.user.matches[i].userId)
                  {
                    this.fromUser.push(this.user.matches[i].name);
                  }
                })
              }
              this.myUser = this.user.username;
              this.myUserId = this.user.id;
          });
        }
      }
    })
  }

  postMsg(chosenUser): void{
    console.log("selectedUser: " + this.selectedUser);
    console.log("selectedUserId: " + this.selectedUserId);
    console.log("myUser: " + this.myUser);
    console.log("myUserId: " + this.myUserId);

    if(chosenUser != undefined)
    {
      console.log(this.myUser);
      let string = (<HTMLInputElement>document.querySelector("#sendMsg")).value;
      if (string.trim() != "")
      {
        // look through match list
        this.UserService.getMatchList().then(result => {
          this.matchList = result;
          for (let i = 0; i < this.matchList.length; i++)
          {

            // if userId == myuserId && userId2 == selecteduserId
            if (this.matchList[i].userId == this.myUserId && this.matchList[i].userId2 == this.selectedUserId)
            {

              this.message.matchId = this.matchList[i].id
              this.message.toUser = this.selectedUser;
              this.message.fromUser = this.myUser;
              this.message.send = string;
              console.log(this.message);
              //this is not ready yet! remove after confirming ^^^^^
              //this.UserService.postMessage(this.message)

            }

          }

        })
      }
    }
    this.pingUser();
  }

  selectUser(userName): void {
    (<HTMLInputElement>document.querySelector("#sendMsg")).value = "";
    this.selectedUser = userName;
    this.UserService.getUserList().then(result => {
      this.userlist = result;
      for (let i = 0; i < this.userlist.length; i++)
      {
        if (this.userlist[i].username == userName)
        {
          this.UserService.getUserById(this.userlist[i].id).then(userSecond => {
            this.user2 = userSecond;
            this.selectedUserId = userSecond.id;
            console.log(userSecond);
          })
        }
      }
    })
  }

  pingUser(): void {
    (<HTMLInputElement>document.querySelector("#sendMsg")).value = "";
  }
}
