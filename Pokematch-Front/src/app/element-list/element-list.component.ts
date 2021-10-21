import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../service/poke-api.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {

  constructor(private PokeService: PokeApiService) {}

  Elements: [] = [];

  ngOnInit(): void {
    this.PokeService.getElementList().then(result => {
      this.Elements = result;
    })
  }

}
