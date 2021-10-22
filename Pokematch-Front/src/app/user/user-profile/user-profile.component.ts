import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserApiService } from '../../service/user-api.service';
import {user} from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private currentRoute: ActivatedRoute, private UserService: UserApiService) { }

    id: 0;
    user: user = {
    id: 0,
    name: '',
    element: [],
    };
  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
    this.id = params['id'];
    this.UserService.getUserById(this.id).then(user => {
      this.user = user;
    });
  });
  }

}