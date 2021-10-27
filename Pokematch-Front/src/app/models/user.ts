import {element} from './element';
import { pokemon } from './pokemon';
export interface user
{
    id: number;
    username: string;
    email: string;
    gender: string;
    interest:string;
    profilepic: string;
    pokemons: pokemon[];
    element: element[];
}