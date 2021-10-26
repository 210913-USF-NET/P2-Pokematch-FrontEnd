import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokeApiService } from 'src/app/Service/poke-api.service';
import { user } from '../../models/user';
import { AuthService } from '@auth0/auth0-angular';
var wtf: string;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService, private currentRoute: ActivatedRoute, private UserService: PokeApiService) { }

  userlist: user[] = [];

  user: user = {
    id: 0,
    username: '',
    email: '',
    gender: '',
    interest: '',
    element: []
  };

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (wtf = profile.email),
    );
    this.UserService.getUserList().then(result => {
      this.userlist = result;
      console.log(this.userlist);
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == wtf) {
          this.user.id = this.userlist[i].id;
          this.UserService.getUserById(this.user.id).then(user => {
            this.user = user;
            console.log(user);
          });
        }
      }
    })
  };

}




// @Component({
//   selector: 'element-list',
//   templateUrl: './element-list.component.html',
//   styleUrls: ['./element-list.component.css']
// })
// export class ElementListComponent implements OnInit {

//   constructor(private currRoute: ActivatedRoute, private PokeService: PokeApiService) {}

//   elements: element[] = [];

//   ngOnInit(): void {
//     this.PokeService.getElementList().then(result => {
//       this.elements = result;
//     })
//   }

// }
