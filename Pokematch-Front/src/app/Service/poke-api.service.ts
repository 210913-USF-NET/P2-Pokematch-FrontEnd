import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from '../models/element';
import { userCreation } from '../models/userCreation';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  rootUrl: string = 'https://pokematch.azurewebsites.net/api/element';
  baoUrl: string = 'https://pokematch.azurewebsites.net/api/user';

  /* Dependency injection. */
  constructor(private http: HttpClient) { }

  getElementList(): Promise<element[]> 
  {
    return this.http.get<[]>(this.rootUrl).toPromise();
  }

  getUserById(id: number): Promise<user> 
  {
    return this.http.get<user>(this.baoUrl +'/'+id).toPromise();
  }

  getUserList(): Promise<user[]>
  {
    return this.http.get<[]>(this.baoUrl).toPromise();
  }
}

