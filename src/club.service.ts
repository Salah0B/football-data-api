import { readFile } from 'node:fs/promises';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Club } from './Club';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ApiClubs } from 'src/ApiClub';
import * as fs from "node:fs";

@Injectable()
export class ClubService implements OnModuleInit {

  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
      this.apiKey = this.configService.get<string>('API_KEY');
  }

  private readonly storage: Map<number, Club> = new Map();
  private readonly favori: Map<number, Club> = new Map();

  private readonly apiKey: string;
  private readonly filePath = 'dataset.json';

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
          'http://api.football-data.org/v4/competitions/2021/teams?limit=100', {
          headers: {
              'X-Auth-Token': this.apiKey,
          },
          }),
    );
    data.teams.map((apiClub) => ({
          id: apiClub.id,
          name: apiClub.name,
          tla: apiClub.tla,
          logo: apiClub.crest,
          address: apiClub.address,
          founded : apiClub.founded,
          clubColors : apiClub.clubColors,
          players : apiClub.squad,
      }))
      .forEach((club) => this.addClub(club));
  }

  addClub(club: Club) {
    this.storage.set(club.id, club);
  }

  async addClubToFile(club: Club) {
      try {
          const fileContent = await this.readFile();
          fileContent.push(club);
          await this.writeFile(fileContent);
      } catch (err) {
          console.error('Error while modifying the file', err);
          throw err;
      }
  }

  private async readFile(): Promise<any[]> {
        try {
            const data = await fs.promises.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            if (err.code === 'ENOENT') {
                return [];
            }
            throw err;
        }
  }

  private async writeFile(data: Club[]): Promise<void> {
      const jsonData = JSON.stringify(data, null, 2); // Pretty format with indentation
      await fs.promises.writeFile(this.filePath, jsonData, 'utf8');
  }

  getAllClubsDetails() {
    return Array.from(this.storage.values()).sort((a, b) =>
      a.name.localeCompare(b.name),);
  }

  getAllClubs() {
      return Array.from(this.storage.values()).sort((a, b) =>
          a.name.localeCompare(b.name),
      ).map(({ name, tla, logo, players }) =>
          ({ name, tla, logo, players: players.map(player => player.name), }));
  }

  getFavoriteClubs() {
      return Array.from(this.favori.values());
  }

  addToFavorite(id: number) {
      this.addClubToFile(this.getClubById(id)[0]);
      this.favori.set(id, this.getClubById(id)[0]);
  }

  getClubById(id: number): Club[] {
      return this.getAllClubsDetails().filter(club => club.id === Number(id));
  }

  getClubByTLA(tla: string): Club[] {
      return this.getAllClubsDetails().filter(club => club.tla === tla);
  }

  remove(id: number) {
    this.storage.delete(Number(id));
  }

  search(term: string) {
      const lowerTerm = term.toLowerCase();
      return Array.from(this.storage.values())
      .filter((club) => club.name.toLowerCase().includes(lowerTerm) ||
          club.tla.toLowerCase().includes(lowerTerm) ||
          club.players.some(player => player.name.toLowerCase().includes(term.toLowerCase())));
  }
}
