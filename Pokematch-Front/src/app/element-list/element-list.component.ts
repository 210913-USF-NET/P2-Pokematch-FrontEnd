import { Component, OnInit } from '@angular/core';
import { element } from '../models/element';
import { PokeApiService } from '../service/poke-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {

  constructor(private currRoute: ActivatedRoute, private PokeService: PokeApiService) {}

  elements: element[] = [];

  ngOnInit(): void {
    this.PokeService.getElementList().then(result => {
      this.elements = result;
    })
  }

}

