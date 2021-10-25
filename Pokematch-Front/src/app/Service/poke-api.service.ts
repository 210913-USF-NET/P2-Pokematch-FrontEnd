import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from '../models/element';
import { userCreation } from '../models/userCreation';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  rootUrl: string = 'https://pokematch.azurewebsites.net/api/element';
  userUrl: string = 'https://pokematch.azurewebsites.net/api/user';

  /* Dependency injection. */
  constructor(private http: HttpClient) { }

  getElementList(): Promise<element[]> 
  {
    return this.http.get<[]>(this.rootUrl).toPromise();
  }

  getUserList(): Promise<userCreation[]>
  {
    return this.http.get<[]>(this.userUrl).toPromise();
  }
}

