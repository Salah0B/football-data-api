import type { INestApplication } from '@nestjs/common';
import { Test, type TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import type supertest from 'supertest';
import { ClubModule } from '../src/club.module';

describe('Clubs API', () => {
  let app: INestApplication;
  let httpRequester: supertest.Agent;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [ClubModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    httpRequester = request(app.getHttpServer());
  });

  it('GET /clubs', async () => {
    const response = await httpRequester.get('/clubs').expect(200);

    expect(response.body).toEqual(expect.any(Array));
  });

  it('POST /clubs', async () => {
    const response = await httpRequester
      .post('/clubs')
      .send({
          id: 57,
          name: "Arsenal FC",
          tla: "ARS",
          logo: "https://crests.football-data.org/57.png",
          founded: 1886,
          clubColors: "Red / White",
          players: [],
      })
      .expect(201);

    expect(response.body).toEqual([{
        id: 57,
        name: "Arsenal FC",
        tla: "ARS",
        logo: "https://crests.football-data.org/57.png",
        founded: 1886,
        clubColors: "Red / White",
        players: [],
    }]);
  });


});
