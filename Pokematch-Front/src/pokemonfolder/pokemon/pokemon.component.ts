import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../app/event-emitter.service';
import { pokemon } from '../../app/models/pokemon';
var pokelist: pokemon[] = [];
var pokenames: pokemon[] = [];
var poketype: pokemon[] = [];
var profilepic: pokemon[] = []; 
var favoritepokemon: pokemon[] = [];
const page = window.open('nav-bar.component.html');
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService, private route: Router) { }
  
  ngOnInit() {
    // if (this.eventEmitterService.subsVar==undefined) {    
    //   this.eventEmitterService.subsVar = this.eventEmitterService.    
    //   invokeFirstComponentFunction.subscribe((name:string) => {    
    //     this.getPokemon(name);  
    for(let i = 0; i <= 9; i++)
{
  this.getPokemon(i);
  if(i == 9)
  {
    break;
  }
}

  
}
  

    getPokemon(name: number){
      let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + name;

      let xhr = new XMLHttpRequest();
      xhr.open("GET", pokeUrl, true);
      xhr.send();
      let pokemon: any = {}
      xhr.onreadystatechange = function(){
        if (this.readyState == 4)
        {
          if(this.status > 199 && this.status < 300)
          {
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

    getPokemonList()
    {
      // document.getElementById("List").innerHTML = '<img src="' + pokelist.join('" /><img src="') + '" />';
      // document.getElementById("names").innerHTML = '   ' + pokenames.join('   ') + '   ';
      for(let i = 1; i <= 9; i++)
      {
        document.getElementById(String(i)).innerHTML = '<img src="' + pokelist[i-1] + ('" /><img src="') + '" />' + 'Pokemon: ' + pokenames[i-1] + ', ' + 'Type: ' + poketype[i-1];
      }
    }

    selectedPokemon(name: number)
    {
      if(profilepic[0] == null)
      {
      alert("You have chosen " + pokenames[name - 1] + " for your profile picture!");
      profilepic.push(pokelist[name-1]);
      document.getElementById('profilepic').innerHTML =  '<img src="' + pokelist[name-1] + ('" /><img src="') + 'width = "50"' + 'height="50"'
      document.getElementById('directions').innerHTML = "Please select your top 3 favortite pokemon! The first selection being your favorite and the third selection being your 3rd favorite."
      return;
      } 
      if(favoritepokemon[2] != null)
      {
        alert("You may only select 3 favorite pokemon");
        console.log(favoritepokemon);
        console.log(profilepic);
        return;
      }
      alert("You have selected " + pokenames[name -1])
      favoritepokemon.push(pokenames[name-1]);
      return;
      // this.route.navigate(['/pokemonselection'])
    }
}
