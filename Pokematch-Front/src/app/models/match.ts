import { message } from './message';

export interface match
{
    id: number;
    name: string;
    imgUrl: string;
    userId: number;
    messages: message[];
}
