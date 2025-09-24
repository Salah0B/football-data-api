export interface ApiClubs {
    teams: ApiClub[];
}

interface ApiClub {
    id: number;
    name: string;
    tla: string;
    crest: string;
    founded: number;
    clubColors: string;
    squad: Squad[];
}

export interface Squad {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
}