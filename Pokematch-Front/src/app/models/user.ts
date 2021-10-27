import {element} from './element';
import {match} from './match';
export interface user
{
    id: number;
    username: string;
    email: string;
    gender: string;
    interest:string;
    profilepic: string;
    pokemons: string;
    element: element[];
    matches?: match[];
}
