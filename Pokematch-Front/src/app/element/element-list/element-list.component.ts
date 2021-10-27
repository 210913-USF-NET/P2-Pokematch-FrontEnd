import { Component, OnInit } from '@angular/core';
import { element } from '../../models/element';
import { PokeApiService } from '../../Service/poke-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {
  constructor(private currRoute: ActivatedRoute, private pokeService: PokeApiService, private auth: AuthService) {}

  elements: element[] = [];
  flag: boolean = false

  ngOnInit(): void {
    this.pokeService.getElementList().then(result =>
      {
      this.elements = result;
      console.log(this.elements);
    })
  }
}
