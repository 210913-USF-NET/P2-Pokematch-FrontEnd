import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokemon } from '../../app/models/pokemon';
import { user } from '../models/user';
import { PokeApiService } from '../service/poke-api.service';
import { AuthService } from '@auth0/auth0-angular';
import { move } from '../models/move';

@Component({
  selector: 'app-pokemonminigame',
  templateUrl: './pokemonminigame.component.html',
  styleUrls: ['./pokemonminigame.component.css']
})
export class PokemonminigameComponent implements OnInit {

  constructor(private router: Router, private UserService: PokeApiService, public auth: AuthService) { }

  userlist: user[] = [];

  bao: string;
  randompokemon: number;
  userHealth = 100;
  computerHealth = 100;

  move1: string
  move2: string
  move3: string
  move4: string

  move: move = {
    id: 0,
    action: '',
    ElementId: 0
  }

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

  ngOnInit(): void {
  let min = 0
  let max = 2
  let randompokemon = Math.floor(Math.random() * (max + 1));
  let randomcomputerpokemon = Math.floor(Math.random() * (300 + 1));
  this.auth.user$.subscribe(
    (profile) => (this.bao = profile.email),
  );
  this.UserService.getUserList().then(result => {
    this.userlist = result;
    for (let i = 0; i < this.userlist.length; i++) {
      if (this.userlist[i].email == this.bao) {
        this.user.id = this.userlist[i].id;
        this.UserService.getUserById(this.user.id).then(user => {
          this.user = user;
          document.getElementById('userpokemon').innerHTML = this.user.pokemons[randompokemon].imgUrl;
        });
      }
    }
  })
  let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + randomcomputerpokemon;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", pokeUrl, true);
  xhr.send();
  let pokemon: any = {}
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status > 199 && this.status < 300) {
        pokemon = JSON.parse(xhr.responseText);
        let div = document.querySelector('.pokemon');
        document.querySelectorAll('.pokemon caption').forEach((el) => el.remove());
        let captionEl = document.createElement('caption');
        let pokename = document.createTextNode(pokemon.name);
        captionEl.appendChild(pokename);
        document.getElementById('computerpokemon').innerHTML = '<img src="' + pokemon.sprites.front_default + ('" /><img src="') + '" />';
      }
    }
  }
  for(let i = 1; i<=4; i++)
  {
  this.UserService.GetMovesFromElementId(i).then(result => {this.move = result; document.getElementById('move'+i).innerHTML = this.move.action;
  if(i == 1 )
{
  this.move1 = this.move.action
}
else if(i == 2 )
{
  this.move2 = this.move.action
}
else if(i == 3 )
{
  this.move3 = this.move.action
}
else if(i == 4 )
{
  this.move4 = this.move.action
}
})
  }
  document.getElementById('userhealth').innerHTML = this.userHealth.toString() + ': HP';
  document.getElementById('computerhealth').innerHTML = this.userHealth.toString() + ': HP';
}


  finishHim(action: string)
  {
    let userchance = Math.floor(Math.random() * (10 + 1));
    let computerchance = Math.floor(Math.random() * (10 + 1));
    let userdamage = Math.floor(Math.random() * (100 + 1));;
    let computerdamage = Math.floor(Math.random() * (100 + 1));;
    let computermoveroll = Math.floor(Math.random() * (4 + 1));;
    let computermove = '';
    let computermoveimg = '';
    if(computermoveroll == 1)
    {
      computermove = this.move1;
      computermoveimg = 'https://i.gifer.com/K0kq.gif';
    }
    else if(computermoveroll == 2)
    {
      computermove = this.move2;
      computermoveimg = 'https://c.tenor.com/jQA-rWHlJXEAAAAC/self-destruct-pokemon.gif';
    }
    else if(computermoveroll == 3)
    {
      computermove = 'solar beam';
      computermoveimg = 'https://c.tenor.com/sNqpg_l9q8kAAAAM/pokemon-bulbasaur.gif';
    }
    else if(computermoveroll == 4)
    {
      computermove = 'flamethrower';
      computermoveimg = 'https://pa1.narvii.com/5711/5263c9781a664ecb0f346bc675f5ec447df11f58_hq.gif'
    }
    if(action == "move1")
    {
      if(userchance > 5)
      {
      this.computerHealth = this.computerHealth - userdamage;
      document.getElementById('computerhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://i.gifer.com/K0kq.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.computerHealth + ": computer hp");
      alert("You used " + this.move1 + "...it hit!")
      if(this.computerHealth <= 0)
      {
      alert("player wins");
      document.getElementById('computerpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (userchance < 5)
      {
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://i.gifer.com/K0kq.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("You used " + this.move1 +" ...it missed!")
      }
      if(computerchance > 5)
      {
      this.userHealth = this.userHealth - computerdamage;
      document.getElementById('userhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.userHealth + ": user hp");
      alert("Pokemongod1478 used " + computermove + "...it hit!")
      if(this.userHealth <= 0)
      {
      alert("Pokemongod1478 wins. Get good.");
      document.getElementById('userpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (computerchance < 5)
      {
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("Pokemongod1478 used " + computermove +" ...it missed!")
      }
    }
    if(action == "move2")
    {
      if(userchance > 5)
      {
      this.computerHealth = this.computerHealth - userdamage;
      document.getElementById('computerhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://c.tenor.com/jQA-rWHlJXEAAAAC/self-destruct-pokemon.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.computerHealth + ": computer hp");
      alert("You used " + this.move2 + "...it hit!")
      if(this.computerHealth <= 0)
      {
      alert("player wins");
      document.getElementById('computerpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (userchance < 5)
      {
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://c.tenor.com/jQA-rWHlJXEAAAAC/self-destruct-pokemon.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("You used " + this.move2 +" ...it missed!")
      }
      if(computerchance > 5)
      {
      this.userHealth = this.userHealth - computerdamage;
      document.getElementById('userhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.userHealth + ": user hp");
      alert("Pokemongod1478 used " + computermove + "...it hit!")
      if(this.userHealth <= 0)
      {
      alert("Pokemongod1478 wins. Get good.");
      document.getElementById('userpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (computerchance < 5)
      {
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("Pokemongod1478 used " + computermove +" ...it missed!")
      }
    }
    if(action == "move3")
    {
      if(userchance > 5)
      {
      this.computerHealth = this.computerHealth - userdamage;
      document.getElementById('computerhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://i.imgur.com/wYRdFed.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.computerHealth + ": computer hp");
      alert("You used " + this.move3 + "...it hit!")
      if(this.computerHealth <= 0)
      {
      alert("player wins");
      document.getElementById('computerpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (userchance < 5)
      {
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://i.imgur.com/wYRdFed.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("You used " + this.move3 +" ...it missed!")
      }
      if(computerchance > 5)
      {
      this.userHealth = this.userHealth - computerdamage;
      document.getElementById('userhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.userHealth + ": user hp");
      alert("Pokemongod1478 used " + computermove + "...it hit!")
      if(this.userHealth <= 0)
      {
      alert("Pokemongod1478 wins. Get good.");
      document.getElementById('userpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (computerchance < 5)
      {
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("Pokemongod1478 used " + computermove +" ...it missed!")
      }
    }
    if(action == "move4")
    {
      if(userchance > 5)
      {
      this.computerHealth = this.computerHealth - userdamage;
      document.getElementById('computerhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://thumbs.gfycat.com/DesertedFailingFrilledlizard-max-1mb.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.computerHealth + ": computer hp");
      alert("You used " + this.move4 + "...it hit!")
      if(this.computerHealth <= 0)
      {
      alert("player wins");
      document.getElementById('computerpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (userchance < 5)
      {
      document.getElementById('pikachu').innerHTML = '<img src="' + 'https://thumbs.gfycat.com/DesertedFailingFrilledlizard-max-1mb.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("You used " + this.move4 +" ...it missed!")
      }
      if(computerchance > 5)
      {
      this.userHealth = this.userHealth - computerdamage;
      document.getElementById('userhealth').innerHTML = this.userHealth.toString() + ': HP';
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      console.log(this.userHealth + ": user hp");
      alert("Pokemongod1478 used " + computermove + "...it hit!")
      if(this.userHealth <= 0)
      {
      alert("Pokemongod1478 wins. Get good.");
      document.getElementById('userpokemon').innerHTML = '<img src="' + 'https://c.tenor.com/bl_3kYhSzsgAAAAM/spongebob-rip-sad-sponge-bob.gif' + ('" /><img src="') + 'width = "50"' + 'height="50"'
      return;
      }
      }
      else if (computerchance < 5)
      {
      document.getElementById('ditto').innerHTML = '<img src="' + computermoveimg + ('" /><img src="') + 'width = "50"' + 'height="50"'
      alert("Pokemongod1478 used " + computermove +" ...it missed!")
      }
    }
  }
}
