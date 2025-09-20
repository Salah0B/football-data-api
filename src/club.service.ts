import { readFile } from 'node:fs/promises';
import { Injectable, OnModuleInit } from '@nestjs/common';
import type { Club } from './Club';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, tap } from 'rxjs';
import { ApiClubs } from 'src/ApiClub';

@Injectable()
export class ClubService implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  private readonly storage: Map<number, Club> = new Map();

  async onModuleInit() {
      await Promise.all([this.loadClubsFromFile(), this.loadClubsFromApi()]);
  }

  private async loadClubsFromFile() {
    const data = await readFile('src/dataset.json', 'utf8');
    const clubs = JSON.parse(data.toString()) as Club[];
      clubs.forEach((club) => this.addClub(club));
  }

  async loadClubsFromApi() {
    const { data } = await firstValueFrom(
      this.httpService.get<ApiClubs>(
          'http://api.football-data.org/v4/competitions/2021/teams', {
          headers: {
              'X-Auth-Token': '579ca5e0ae3541c1bc1973f79cddc32b',
          },
          }),
    );
    data.teams.map((apiClub) => ({
          id: apiClub.id,
          name: apiClub.name,
          tla: apiClub.tla,
          logo: apiClub.crest,
          founded : apiClub.founded,
          clubColors : apiClub.clubColors,
          players : apiClub.squad.map(player => player.name),
      }))
      .forEach((club) => this.addClub(club));
  }

  addClub(club: Club) {
    this.storage.set(club.id, club);
  }

  getAllClubs(): Club[] {
    return Array.from(this.storage.values()).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }

  getClubById(id: number): Club[] {
      return this.getAllClubs().filter(club => club.id === Number(id));
  }

  getClubByTLA(tla: string): Club[] {
      return this.getAllClubs().filter(club => club.tla === tla);
  }

  remove(id: number) {
    this.storage.delete(Number(id));
  }

  search(term: string) {
    return Array.from(this.storage.values())
      .filter((club) => club.name.includes(term) || club.tla.includes(term))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
