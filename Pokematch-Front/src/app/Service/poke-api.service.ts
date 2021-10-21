import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  rootUrl: string = 'https://pokematch.azurewebsites.net/api/element';

  /* Dependency injection. */
  constructor(private http: HttpClient) { }

  getElementList(): Promise<[]> 
  {
    return this.http.get<[]>(this.rootUrl).toPromise();
  }
}
