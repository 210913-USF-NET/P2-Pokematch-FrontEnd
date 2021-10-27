import {element} from './element';
import {match} from './match';
import { pokemon } from './pokemon';
export interface user
{
    id?: number;
    username: string;
    email: string;
    gender: string;
    interest:string;
    profilepic: string;
    element: string;
    elementId?: number;

    matches?: match[];
    pokemons?: pokemon[];
}