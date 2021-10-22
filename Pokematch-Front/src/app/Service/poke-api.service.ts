import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from '../models/element';
import {user} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  rootUrl: string = 'https://pokematch.azurewebsites.net/api/element';

  /* Dependency injection. */
  constructor(private http: HttpClient) { }

  getElementList(): Promise<element[]> 
  {
    return this.http.get<[]>(this.rootUrl).toPromise();
  }
}

