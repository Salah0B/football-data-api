import { Squad } from "./ApiClub";

export interface Club {
    id: number;
    name: string;
    tla: string;
    logo: string;
    founded: number;
    clubColors: string;
    players: Squad[];
}
