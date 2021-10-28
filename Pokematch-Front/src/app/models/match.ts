import { message } from './message';

export interface match
{
    id?: number;
    name: string;
    userId: number;
    userId2: number;
    messages: message[];
}
