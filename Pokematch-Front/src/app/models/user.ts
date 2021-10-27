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

    pokemons?: pokemon[];
}