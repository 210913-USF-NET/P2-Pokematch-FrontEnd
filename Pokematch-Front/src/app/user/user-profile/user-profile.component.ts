import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { user } from '../../models/user';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { pokemon } from 'src/app/models/pokemon';
import { UserCreationService } from 'src/app/service/user-creation.service';

var wtf: string;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService, private currentRoute: ActivatedRoute, private pokeService: PokeApiService, private userService: UserCreationService, private router: Router) { }

  userlist: user[] = [];

  user: user = {
    id: 0,
    username: '',
    email: '',
    gender: '',
    interest: '',
    profilepic: '',
    element: '',
    pokemons: []
  };

  ngOnInit(): void {
    this.userService.changeProfile = false;
    this.userService.pokemonfavoritechange = null;
    this.auth.user$.subscribe(
      (profile) => (wtf = profile.email),
    );
    this.pokeService.getUserList().then(result => {
      this.userlist = result;
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == wtf) {
          this.user.id = this.userlist[i].id;
          this.pokeService.getUserById(this.user.id).then(user => {
            this.user = user;

            if (this.user.elementId == 1) {
              this.user.element = 'Fire'
            }
            else if (this.user.elementId == 2) {
              this.user.element = 'Grass'
            }
            else if (this.user.elementId == 3) {
              this.user.element = 'Water'
            }
            document.getElementById('profilepic').innerHTML = this.user.profilepic;
            document.getElementById('yup').innerHTML = this.user.profilepic;

            for(let i = 0; i < 4 ; i++)
            {
              document.getElementById('favorite'+[i + 1]).innerHTML = this.user.pokemons[i].imgUrl;
              document.getElementById('favorite'+[i + 1] + '-name').innerHTML = this.user.pokemons[i].name
            }
          });
        }
      }
    })
  };

    ChangeFavorite(select: number)
    {
      if(select == 1){
        this.userService.pokemonfavoritechange = select -1;
      // select = this.user.pokemons[0].id
      // this.UserService.deletePokemon(select);
      this.router.navigate(['pokemon'])
      }
      else if(select == 2){
        this.userService.pokemonfavoritechange = select -1;
        // select = this.user.pokemons[1].id
        // this.UserService.deletePokemon(select);
      this.router.navigate(['pokemon'])
      }
      else if(select == 3){
        this.userService.pokemonfavoritechange = select -1;
        // select = this.user.pokemons[2].id
        // this.UserService.deletePokemon(select);
      this.router.navigate(['pokemon'])
      }
    }

    ChangeProfilePicture()
    {
      this.userService.changeProfile = true
      this.router.navigate(['pokemon']);
    }

    Battle(id: number)
    {
      for(let i = 1; i <=3; i++)
      {
        if(i == id)
        {
          this.userService.selectedpokemon = id-1;
        }
      }
      this.router.navigate(['pokemonminigame']);
    }
}
