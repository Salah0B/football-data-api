import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import type { Club } from './Club';
import { ClubService } from './club.service';

@Controller('/clubs')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Post()
  createClub(@Body() club: Club): Club[] {
    this.clubService.addClub(club);
    return this.clubService.getClubById(club.id);
  }

  @Get()
  getClubs(@Query('tla') tla: string) {
    if (tla) {
      return this.clubService.getClubByTLA(tla);
    }
    return this.clubService.getAllClubs();
  }

  @Get(':id')
  getClub(@Param('id') id: number) {
      return this.clubService.getClubById(id);
  }

  @Get('favori')
  getFavoriteClubs() {
      return this.clubService.getFavoriteClubs();
  }

  @Post('favori')
  addToFavorite(@Body() idClub: { id : number}): Club[] {
      this.clubService.addToFavorite(idClub.id);
      return this.clubService.getClubById(idClub.id);
  }

  @Delete(':id')
  deleteClub(@Param('id') id: number): void {
    this.clubService.remove(id);
  }

  @Post('search')
  @HttpCode(200)
  searchInfo(@Body() { term }: { term: string }): Club[] {
    return this.clubService.search(term);
  }
}
