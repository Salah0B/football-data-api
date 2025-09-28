export interface ApiClubs {
    teams: ApiClub[];
}

interface ApiClub {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    squad: Squad[];
}

export interface Squad {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
}