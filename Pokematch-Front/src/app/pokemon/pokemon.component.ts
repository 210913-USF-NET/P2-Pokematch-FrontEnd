import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { pokemon } from '../models/pokemon';
var pokelist: pokemon[] = [];
var pokenames: pokemon[] = [];
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) { }
  
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
            let img = document.querySelector('.pokemon > img').setAttribute('src', pokemon.sprites.front_default);
            let div = document.querySelector('.pokemon');
            document.querySelectorAll('.pokemon caption').forEach((el) => el.remove());
            let captionEl = document.createElement('caption');
            let pokename = document.createTextNode(pokemon.name);
            captionEl.appendChild(pokename);
            div.appendChild(captionEl);
            pokelist.push(pokemon.sprites.front_default);
            pokenames.push(pokemon.name);
          }
        }
      }
    }

    getPokemonList()
    {
      document.getElementById("List").innerHTML = '<img src="' + pokelist.join('" /><img src="') + '" />';
      document.getElementById("names").innerHTML = '   ' + pokenames.join('   ') + '   ';
    }
}
