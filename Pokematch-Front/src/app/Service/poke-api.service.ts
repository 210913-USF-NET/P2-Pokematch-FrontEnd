import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from '../models/element';
import { user } from '../models/user';
import { pokemon } from '../models/pokemon';
import { match } from '../models/match';
import { message } from '../models/message';
import { move } from '../models/move';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  rootUrl: string = 'https://pokematch.azurewebsites.net/api/element';
  userUrl: string = 'https://pokematch.azurewebsites.net/api/user';

  pokeUrl: string = 'https://pokematch.azurewebsites.net/api/pokemon';
  moveUrl: string = 'https://pokematch.azurewebsites.net/api/Move';
  matchUrl: string = 'https://pokematch.azurewebsites.net/api/match';

  baseUrl: string = 'https://pokematch.azurewebsites.net/api/';

  globalid: number;
  /* Dependency injection. */
  constructor(private http: HttpClient) { }

  /* --------------------- GET --------------------- */

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

  getMatchList(): Promise<match[]>
  {
    return this.http.get<[]>(this.baseUrl + 'match').toPromise();
  }

  getMovesFromElementId(id: number): Promise<move>
  {
    return this.http.get<move>(this.moveUrl +'/'+id).toPromise();
  }


  /* --------------------- POST --------------------- */


  addUser(user: user): Promise<user>
  {
    return this.http.post<user>(this.userUrl, user).toPromise();
  }

  addPokemon(pokemon: pokemon): Promise<pokemon>
  {
    return this.http.post<pokemon>(this.pokeUrl, pokemon).toPromise();
  }

  addMatch(match: match): Promise<match>
  {
    return this.http.post<match>(this.matchUrl, match).toPromise();
  }

  postMessage(message: message): Promise<message>
  {
    return this.http.post<message>(this.baseUrl + 'message', message).toPromise();
  }

  /* --------------------- PUT --------------------- */

  updateUser(user: user): Promise<user>
  {
    return this.http.put<user>(this.userUrl + '/' + this.globalid, user).toPromise();
  }

  /* --------------------- DELETE --------------------- */

  deletePokemon(id: number): Promise<pokemon>
  {
    return this.http.delete<pokemon>(this.pokeUrl + '/' + id).toPromise();
  }

  deleteMatchById(id: number): Promise<match>
  {
    return this.http.delete<match>(this.matchUrl + '/' + id).toPromise();
  }
}

