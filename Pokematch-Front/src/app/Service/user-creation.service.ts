import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserCreationService {
  username: string;
  email: string;
  gender: string;
  interest: string;
  profilepic: string;
  element: string;

  changeProfile:boolean

  selectedpokemon: number;
  constructor() { }
}
