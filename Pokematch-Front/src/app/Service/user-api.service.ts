import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {user} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  rootUrl: string = 'https://pokematch.azurewebsites.net/api/user';

  /* Dependency injection. */
  constructor(private http: HttpClient) { }

  getUserById(id: number): Promise<user> 
  {
    return this.http.get<user>(this.rootUrl).toPromise();
  }
}
