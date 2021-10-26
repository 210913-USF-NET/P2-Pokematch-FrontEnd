import {element} from './element';
export interface user
{
    id: number;
    username: string;
    email: string;
    gender: string;
    interest:string;

    element: element[];
}