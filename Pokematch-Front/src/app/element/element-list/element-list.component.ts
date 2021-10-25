import { Component, OnInit } from '@angular/core';
import { element } from '../../models/element';
import { PokeApiService } from 'src/app/Service/poke-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCreationService } from 'src/app/Service/user-creation.service';

@Component({
  selector: 'element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit { 
  constructor(private currRoute: ActivatedRoute, private PokeService: PokeApiService) {}

  elements: element[] = [];

  ngOnInit(): void {
    this.PokeService.getElementList().then(result => 
      {
      this.elements = result;
      });
  }

}
