export interface message
{
    id?: number;
    toUser: string;
    fromUser: string;
    send: string;
    recieve?: string;
    matchId: number;
}
