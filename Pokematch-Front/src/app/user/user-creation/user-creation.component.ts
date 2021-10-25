import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { userCreation } from 'src/app/models/userCreation';
import { PokeApiService } from 'src/app/Service/poke-api.service';
import { UserCreationService } from 'src/app/Service/user-creation.service';


@Component({
  selector: 'user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl(''),
    //lastName: new FormControl(''),
  });

  user:userCreation[] = [];

  constructor(private currRoute: ActivatedRoute, private userService: UserCreationService, private pokeService: PokeApiService, ) { }

  ngOnInit(): void {
    this.pokeService.getUserList().then(r =>
      {
        this.user = r;
      });
  }

  onSubmit() {
    console.log(this.profileForm.value);

    this.userService.username = this.profileForm.value.username;

    console.log(this.userService.username);
  }

}
