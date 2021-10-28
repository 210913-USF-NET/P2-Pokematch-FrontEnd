import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokemon } from '../../app/models/pokemon';
import { user } from '../models/user';
import { PokeApiService } from '../service/poke-api.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserCreationService } from '../service/user-creation.service';

var pokelist: string[] = [];
var pokenames: string [] = [];
var poketype: string[] = [];
var profilepic: string[] = [];
var favoritepokemon: string[] = [];
var bao: string;

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private router: Router, private pokeService: PokeApiService, public auth: AuthService, private userService: UserCreationService) { }

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

  charizard: pokemon = {

    Name: '',
    Hp: 100,
    imgUrl: '',
    UserId: 0 ,
  };

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => (bao = profile.email),
    );
    this.pokeService.getUserList().then(result => {
      this.userlist = result;
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == bao) {
          this.user.id = this.userlist[i].id;
          this.pokeService.getUserById(this.user.id).then(user => {
            this.user = user;
            if(this.user.profilepic != '')
           {
           document.getElementById('directions').innerHTML = "Please select your top 3 favortite pokemon! The first selection being your favorite and the third selection being your 3rd favorite."
           }
          });
        }
      }
      return;
    })
    for (let i = 0; i < 11; i++) {
      this.getPokemon(i);
    }
  }


  getPokemon(name: number) {
    let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + name;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", pokeUrl, true);
    xhr.send();
    let pokemon: any = {}
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status > 199 && this.status < 300) {
          pokemon = JSON.parse(xhr.responseText);
          console.log(pokemon);
          let div = document.querySelector('.pokemon');
          document.querySelectorAll('.pokemon caption').forEach((el) => el.remove());
          let captionEl = document.createElement('caption');
          let pokename = document.createTextNode(pokemon.name);
          captionEl.appendChild(pokename);
          // div.appendChild(captionEl);
          pokelist.push(pokemon.sprites.front_default);
          pokenames.push(pokemon.name);
          poketype.push(pokemon.types[0].type.name)
        }
      }
    }
  }

  getPokemonList() {
    // document.getElementById("List").innerHTML = '<img src="' + pokelist.join('" /><img src="') + '" />';
    // document.getElementById("names").innerHTML = '   ' + pokenames.join('   ') + '   ';
    for (let i = 1; i < 11; i++) {
      document.getElementById(String(i)).innerHTML = '<img src="' + pokelist[i - 1] + ('" /><img src="') + '" />' + 'Pokemon: ' + pokenames[i - 1] + ', ' + 'Type: ' + poketype[i - 1];
    }
  }

  selectedPokemon(net: number) {
    if (this.user.profilepic == '') {
      this.auth.user$.subscribe(
        (profile) => (bao = profile.email),
      );
      this.pokeService.getUserList().then(result => {
        this.userlist = result;
        for (let i = 0; i < this.userlist.length; i++) {
          if (this.userlist[i].email == bao) {
            this.user.id = this.userlist[i].id;
            this.pokeService.getUserById(this.user.id).then(user => {
              this.user = user;
              console.log(user);
              this.user.profilepic = '<img src="' + pokelist[net - 1] + '" />';
              document.getElementById('directions').innerHTML = "Please select your top 3 favortite pokemon! The first selection being your favorite and the third selection being your 3rd favorite."
              this.pokeService.updateUser(user)

              if (this.user.pokemons[2] != null) {
                this.router.navigate(['userprofile'])
              }
            });
          }
        }
        return;
      })
      alert("You have chosen " + pokenames[net - 1] + " for your profile picture!");
      profilepic.push(pokelist[net - 1]);
      document.getElementById('profilepic').innerHTML = '<img src="' + pokelist[net - 1] + ('" /><img src="') + 'width = "50"' + 'height="50"'
      document.getElementById('directions').innerHTML = "Please select your top 3 favortite pokemon! The first selection being your favorite and the third selection being your 3rd favorite."
      return;
    }
    console.log(this.userService.pokemonfavoritechange + " look here");
    if(this.userService.pokemonfavoritechange == null)
    {
    this.auth.user$.subscribe(
      (profile) => (bao = profile.email),
    );
    this.pokeService.getUserList().then(result => {
      this.userlist = result;
      console.log(this.userlist);
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == bao) {
          this.user.id = this.userlist[i].id;
          this.pokeService.getUserById(this.user.id).then(user => {
            this.user = user;
            if(this.user.pokemons[2] == undefined)
            {
            this.charizard.UserId = this.user.id;
            this.charizard.Name = pokenames[net - 1];
            this.charizard.imgUrl = '<img src="' + pokelist[net - 1] + '" /><img src="' + 'width = "50"' + 'height="50"';
            this.pokeService.addPokemon(this.charizard)
            alert("You have selected " + pokenames[net - 1])
            favoritepokemon.push(pokelist[net - 1]);
            return;
            }
            else{
            alert("You may only select 3 favorite pokemon");
            }
          });
        }
      }
    })
  }
  if (this.userService.pokemonfavoritechange != null)
  {
    this.auth.user$.subscribe(
      (profile) => (bao = profile.email),
    );
    this.pokeService.getUserList().then(result => {
      this.userlist = result;
      console.log(this.userlist);
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == bao) {
          this.user.id = this.userlist[i].id;
          this.pokeService.getUserById(this.user.id).then(user => {
            this.user = user;
            this.pokeService.deletePokemon(this.user.pokemons[this.userService.pokemonfavoritechange].id);
            this.charizard.UserId = this.user.id;
            this.charizard.Name = pokenames[net - 1];
            this.charizard.imgUrl = '<img src="' + pokelist[net - 1] + '" /><img src="' + 'width = "50"' + 'height="50"';
            this.pokeService.addPokemon(this.charizard)
            alert("You have selected " + pokenames[net - 1] + "as your new favorite")
            favoritepokemon.push(pokelist[net - 1]);
            this.router.navigate(['userprofile']);
          });
        }
      }
    })
  }
    // this.route.navigate(['/pokemonselection'])
  }

  yolo: string = '';
  SearchPokemon(yolo: string) {
    yolo.toLowerCase();
    let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + yolo;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", pokeUrl, true);
    xhr.send();
    let pokemon: any = {}
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status > 199 && this.status < 300) {
          pokemon = JSON.parse(xhr.responseText);
          console.log(pokemon);
          let div = document.querySelector('.pokemon');
          document.querySelectorAll('.pokemon caption').forEach((el) => el.remove());
          let captionEl = document.createElement('caption');
          let pokename = document.createTextNode(pokemon.name);
          captionEl.appendChild(pokename);
          // div.appendChild(captionEl);
          pokelist.push(pokemon.sprites.front_default);
          pokenames.push(pokemon.name);
          poketype.push(pokemon.types[0].type.name)
          document.getElementById('result1').innerHTML = '<img src="' + pokemon.sprites.front_default + ('" /><img src="') + '" />'
        }
      }
    }
  }

  selectedSearchedPokemon() {
    let z = pokelist.length;
    if (this.user.profilepic == '') {
        this.auth.user$.subscribe(
          (profile) => (bao = profile.email),
        );
      this.pokeService.getUserList().then(result => {
        this.userlist = result;
        console.log(this.userlist);
        for (let i = 0; i < this.userlist.length; i++) {
          if (this.userlist[i].email == bao) {
            this.user.id = this.userlist[i].id;
            this.pokeService.getUserById(this.user.id).then(user => {
              this.user = user;
              this.user.profilepic = '<img src="' + pokelist[z - 1] + '" /><img src="' + 'width = "50"' + 'height="50"';
              document.getElementById('directions').innerHTML = "Please select your top 3 favortite pokemon! The first selection being your favorite and the third selection being your 3rd favorite."
              this.pokeService.updateUser(user)
            });
          }
        }
      })
      alert("You have chosen " + pokenames[z-1] + " for your profile picture!");
      profilepic.push(pokelist[z-1]);
      document.getElementById('profilepic').innerHTML = '<img src="' + pokelist[z-1] + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
    }
    this.auth.user$.subscribe(
      (profile) => (bao = profile.email),
    );
    this.pokeService.getUserList().then(result => {
      this.userlist = result;
      console.log(this.userlist);
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].email == bao) {
          this.user.id = this.userlist[i].id;
          this.pokeService.getUserById(this.user.id).then(user => {
            this.user = user;
            if(this.user.pokemons[2] == undefined)
            {
            this.charizard.UserId = this.user.id;
            this.charizard.Name = pokenames[z - 1];
            this.charizard.imgUrl = '<img src="' + pokelist[z - 1] + '" /><img src="' + 'width = "50"' + 'height="50"';
            this.pokeService.addPokemon(this.charizard)
            alert("You have selected " + pokenames[z - 1])
            favoritepokemon.push(pokelist[z - 1]);
            return;
            }
            else{
            alert("You may only select 3 favorite pokemon");
            this.router.navigate(['userprofile']);
            }
          });
        }
      }
    })
  }
}
