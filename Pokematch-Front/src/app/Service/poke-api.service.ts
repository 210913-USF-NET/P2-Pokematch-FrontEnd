import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from '../models/element';
import { user } from '../models/user';
import { match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  rootUrl: string = 'https://pokematch.azurewebsites.net/api/element';
  userUrl: string = 'https://pokematch.azurewebsites.net/api/user';
  matchUrl: string = 'https://pokematch.azurewebsites.net/api/match';

  baseUrl: string = 'https://pokematch.azurewebsites.net/api/';

  globalid: number;
  /* Dependency injection. */
  constructor(private http: HttpClient) { }

  getElementList(): Promise<element[]>
  {
    return this.http.get<[]>(this.rootUrl).toPromise();
  }

  getUserById(id: number): Promise<user>
  {
    this.globalid = id;
    return this.http.get<user>(this.userUrl +'/'+id).toPromise();
  }

  getUserList(): Promise<user[]>
  {
    return this.http.get<[]>(this.userUrl).toPromise();
  }

  addUser(user: user): Promise<user>
  {
    return this.http.post<user>(this.userUrl, user).toPromise();
  }

  UpdateUser(user: user): Promise<user>
  {
    return this.http.put<user>(this.userUrl + '/' + this.globalid, user).toPromise();
  }

  AddMatch(match: match): Promise<match>
  {
    return this.http.post<match>(this.matchUrl, match).toPromise();
  }

  getMatchList(): Promise<match[]>
  {
    return this.http.get<[]>(this.baseUrl + 'match').toPromise();
  }


}

