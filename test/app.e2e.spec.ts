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

  it('POST /clubs - Add a club', async () => {
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

  it('GET /clubs - List all club', async () => {
      const response = await httpRequester.get('/clubs/details/61').expect(200);

      expect(response.body).toEqual([
          {
              "id": 61,
              "name": "Chelsea FC",
              "tla": "CHE",
              "logo": "https://crests.football-data.org/61.png",
              "address": "Fulham Road London SW6 1HS",
              "founded": 1905,
              "clubColors": "Royal Blue / White",
              "players": [
                  {
                      "id": 135555,
                      "name": "Robert Sánchez",
                      "position": "Goalkeeper",
                      "dateOfBirth": "1997-11-18",
                      "nationality": "Spain"
                  },
                  {
                      "id": 137544,
                      "name": "Gabriel Slonina",
                      "position": "Goalkeeper",
                      "dateOfBirth": "2004-05-15",
                      "nationality": "USA"
                  },
                  {
                      "id": 153828,
                      "name": "Filip Jörgensen",
                      "position": "Goalkeeper",
                      "dateOfBirth": "2002-04-16",
                      "nationality": "Denmark"
                  },
                  {
                      "id": 246743,
                      "name": "Ted Curd",
                      "position": "Goalkeeper",
                      "dateOfBirth": "2006-02-14",
                      "nationality": "England"
                  },
                  {
                      "id": 276866,
                      "name": "Reggie Walsh",
                      "position": "Midfield",
                      "dateOfBirth": "2008-10-20",
                      "nationality": "England"
                  },
                  {
                      "id": 244778,
                      "name": "Estevao",
                      "position": "Offence",
                      "dateOfBirth": "2006-04-24",
                      "nationality": "Brazil"
                  },
                  {
                      "id": 272058,
                      "name": "Shumaira Mheuka",
                      "position": "Offence",
                      "dateOfBirth": "2007-10-20",
                      "nationality": "England"
                  },
                  {
                      "id": 152498,
                      "name": "Malo Gusto",
                      "position": "Right-Back",
                      "dateOfBirth": "2003-05-19",
                      "nationality": "France"
                  },
                  {
                      "id": 151095,
                      "name": "Liam Delap",
                      "position": "Centre-Forward",
                      "dateOfBirth": "2003-02-08",
                      "nationality": "England"
                  },
                  {
                      "id": 144892,
                      "name": "Cole Palmer",
                      "position": "Attacking Midfield",
                      "dateOfBirth": "2002-05-06",
                      "nationality": "England"
                  },
                  {
                      "id": 121103,
                      "name": "Moisés Caicedo",
                      "position": "Defensive Midfield",
                      "dateOfBirth": "2001-11-02",
                      "nationality": "Ecuador"
                  },
                  {
                      "id": 103125,
                      "name": "João Pedro",
                      "position": "Centre-Forward",
                      "dateOfBirth": "2001-09-26",
                      "nationality": "Brazil"
                  },
                  {
                      "id": 102603,
                      "name": "Enzo Fernández",
                      "position": "Central Midfield",
                      "dateOfBirth": "2001-01-17",
                      "nationality": "Argentina"
                  },
                  {
                      "id": 98978,
                      "name": "Mykhailo Mudryk",
                      "position": "Left Winger",
                      "dateOfBirth": "2001-01-05",
                      "nationality": "Ukraine"
                  },
                  {
                      "id": 56628,
                      "name": "Reece James",
                      "position": "Right-Back",
                      "dateOfBirth": "1999-12-08",
                      "nationality": "England"
                  },
                  {
                      "id": 15863,
                      "name": "Cucurella",
                      "position": "Left-Back",
                      "dateOfBirth": "1998-07-22",
                      "nationality": "Spain"
                  },
                  {
                      "id": 8545,
                      "name": "Wesley Fofana",
                      "position": "Centre-Back",
                      "dateOfBirth": "2000-12-17",
                      "nationality": "France"
                  },
                  {
                      "id": 7880,
                      "name": "Tosin Adarabioyo",
                      "position": "Centre-Back",
                      "dateOfBirth": "1997-09-24",
                      "nationality": "England"
                  },
                  {
                      "id": 7810,
                      "name": "Trevoh Chalobah",
                      "position": "Centre-Back",
                      "dateOfBirth": "1999-07-05",
                      "nationality": "England"
                  },
                  {
                      "id": 3329,
                      "name": "Raheem Sterling",
                      "position": "Right Winger",
                      "dateOfBirth": "1994-12-08",
                      "nationality": "England"
                  },
                  {
                      "id": 2074,
                      "name": "Pedro Neto",
                      "position": "Right Winger",
                      "dateOfBirth": "2000-03-09",
                      "nationality": "Portugal"
                  },
                  {
                      "id": 813,
                      "name": "Axel Disasi",
                      "position": "Centre-Back",
                      "dateOfBirth": "1998-03-11",
                      "nationality": "France"
                  },
                  {
                      "id": 250436,
                      "name": "Tyrique George",
                      "position": "Left Winger",
                      "dateOfBirth": "2006-02-04",
                      "nationality": "England"
                  },
                  {
                      "id": 249320,
                      "name": "Josh Acheampong",
                      "position": "Right-Back",
                      "dateOfBirth": "2006-05-05",
                      "nationality": "England"
                  },
                  {
                      "id": 247243,
                      "name": "Ollie Harrison",
                      "position": "Defensive Midfield",
                      "dateOfBirth": "2007-08-07",
                      "nationality": "England"
                  },
                  {
                      "id": 207109,
                      "name": "Marc Guiu",
                      "position": "Centre-Forward",
                      "dateOfBirth": "2006-01-04",
                      "nationality": "Spain"
                  },
                  {
                      "id": 189477,
                      "name": "Jorrel Hato",
                      "position": "Centre-Back",
                      "dateOfBirth": "2006-03-07",
                      "nationality": "Netherlands"
                  },
                  {
                      "id": 184273,
                      "name": "Facundo Buonanotte",
                      "position": "Attacking Midfield",
                      "dateOfBirth": "2004-12-23",
                      "nationality": "Argentina"
                  },
                  {
                      "id": 181901,
                      "name": "Alejandro Garnacho",
                      "position": "Left Winger",
                      "dateOfBirth": "2004-07-01",
                      "nationality": "Argentina"
                  },
                  {
                      "id": 179460,
                      "name": "Jamie Bynoe-Gittens",
                      "position": "Left Winger",
                      "dateOfBirth": "2004-08-08",
                      "nationality": "England"
                  },
                  {
                      "id": 172738,
                      "name": "Romeo Lavia",
                      "position": "Defensive Midfield",
                      "dateOfBirth": "2004-01-06",
                      "nationality": "Belgium"
                  },
                  {
                      "id": 170440,
                      "name": "Levi Colwill",
                      "position": "Centre-Back",
                      "dateOfBirth": "2003-02-26",
                      "nationality": "England"
                  },
                  {
                      "id": 170426,
                      "name": "Benoît Badiashile",
                      "position": "Centre-Back",
                      "dateOfBirth": "2001-03-26",
                      "nationality": "France"
                  },
                  {
                      "id": 166366,
                      "name": "Andrey Santos",
                      "position": "Central Midfield",
                      "dateOfBirth": "2004-05-03",
                      "nationality": "Brazil"
                  },
                  {
                      "id": 165314,
                      "name": "Dario Essugo",
                      "position": "Defensive Midfield",
                      "dateOfBirth": "2005-03-14",
                      "nationality": "Portugal"
                  }
              ]
          }
      ]);
  });

    it('GET /clubs?tla=XXX - Get a club by TLA (Three-Letter Acronym)', async () => {
        const response = await httpRequester.get('/clubs?tla=MCI').expect(200);

        expect(response.body).toEqual([
            {
                "id": 65,
                "name": "Manchester City FC",
                "tla": "MCI",
                "logo": "https://crests.football-data.org/65.png",
                "address": "SportCity Manchester M11 3FF",
                "founded": 1880,
                "clubColors": "Sky Blue / White",
                "players": [
                    {
                        "id": 1731,
                        "name": "Gianluigi Donnarumma",
                        "position": "Goalkeeper",
                        "dateOfBirth": "1999-02-25",
                        "nationality": "Italy"
                    },
                    {
                        "id": 3953,
                        "name": "Marcus Bettinelli",
                        "position": "Goalkeeper",
                        "dateOfBirth": "1992-05-24",
                        "nationality": "England"
                    },
                    {
                        "id": 6958,
                        "name": "Stefan Ortega Moreno",
                        "position": "Goalkeeper",
                        "dateOfBirth": "1992-11-06",
                        "nationality": "Germany"
                    },
                    {
                        "id": 153874,
                        "name": "James Trafford",
                        "position": "Goalkeeper",
                        "dateOfBirth": "2002-10-10",
                        "nationality": "England"
                    },
                    {
                        "id": 270613,
                        "name": "Kaden Braithwaite",
                        "position": "Defence",
                        "dateOfBirth": "2008-03-25",
                        "nationality": "England"
                    },
                    {
                        "id": 286320,
                        "name": "Stephen Mfuni",
                        "position": "Defence",
                        "dateOfBirth": "2008-02-12",
                        "nationality": "England"
                    },
                    {
                        "id": 206743,
                        "name": "Nico O'Reilly",
                        "position": "Midfield",
                        "dateOfBirth": "2005-03-21",
                        "nationality": "England"
                    },
                    {
                        "id": 286321,
                        "name": "Divine Mukasa",
                        "position": "Midfield",
                        "dateOfBirth": "2007-08-22",
                        "nationality": "England"
                    },
                    {
                        "id": 286950,
                        "name": "Ryan McAidoo",
                        "position": "Midfield",
                        "dateOfBirth": "2008-06-24",
                        "nationality": "England"
                    },
                    {
                        "id": 286773,
                        "name": "Jaden Heskey",
                        "position": "Offence",
                        "dateOfBirth": "2005-12-17",
                        "nationality": "England"
                    },
                    {
                        "id": 286775,
                        "name": "Reigan Heskey",
                        "position": "Offence",
                        "dateOfBirth": "2008-01-19",
                        "nationality": "England"
                    },
                    {
                        "id": 91512,
                        "name": "Matheus Nunes",
                        "position": "Central Midfield",
                        "dateOfBirth": "1998-08-27",
                        "nationality": "Portugal"
                    },
                    {
                        "id": 66896,
                        "name": "Omar Marmoush",
                        "position": "Centre-Forward",
                        "dateOfBirth": "1999-02-07",
                        "nationality": "Egypt"
                    },
                    {
                        "id": 38101,
                        "name": "Erling Haaland",
                        "position": "Centre-Forward",
                        "dateOfBirth": "2000-07-21",
                        "nationality": "Norway"
                    },
                    {
                        "id": 10183,
                        "name": "Rúben Dias",
                        "position": "Centre-Back",
                        "dateOfBirth": "1997-05-14",
                        "nationality": "Portugal"
                    },
                    {
                        "id": 8642,
                        "name": "Rayan Aït Nouri",
                        "position": "Left-Back",
                        "dateOfBirth": "2001-06-06",
                        "nationality": "Algeria"
                    },
                    {
                        "id": 8240,
                        "name": "Nathan Aké",
                        "position": "Centre-Back",
                        "dateOfBirth": "1995-02-18",
                        "nationality": "Netherlands"
                    },
                    {
                        "id": 7888,
                        "name": "Phil Foden",
                        "position": "Right Winger",
                        "dateOfBirth": "2000-05-28",
                        "nationality": "England"
                    },
                    {
                        "id": 7696,
                        "name": "Tijjani Reijnders",
                        "position": "Central Midfield",
                        "dateOfBirth": "1998-07-29",
                        "nationality": "Netherlands"
                    },
                    {
                        "id": 4147,
                        "name": "Kalvin Phillips",
                        "position": "Defensive Midfield",
                        "dateOfBirth": "1995-12-02",
                        "nationality": "England"
                    },
                    {
                        "id": 3313,
                        "name": "John Stones",
                        "position": "Centre-Back",
                        "dateOfBirth": "1994-05-28",
                        "nationality": "England"
                    },
                    {
                        "id": 3254,
                        "name": "Bernardo Silva",
                        "position": "Attacking Midfield",
                        "dateOfBirth": "1994-08-10",
                        "nationality": "Portugal"
                    },
                    {
                        "id": 3199,
                        "name": "Rodri",
                        "position": "Defensive Midfield",
                        "dateOfBirth": "1996-06-22",
                        "nationality": "Spain"
                    },
                    {
                        "id": 65,
                        "name": "Mateo Kovačić",
                        "position": "Central Midfield",
                        "dateOfBirth": "1994-05-06",
                        "nationality": "Croatia"
                    },
                    {
                        "id": 212868,
                        "name": "Abdukodir Khusanov",
                        "position": "Centre-Back",
                        "dateOfBirth": "2004-02-29",
                        "nationality": "Uzbekistan"
                    },
                    {
                        "id": 187202,
                        "name": "Rico Lewis",
                        "position": "Right-Back",
                        "dateOfBirth": "2004-11-21",
                        "nationality": "England"
                    },
                    {
                        "id": 179716,
                        "name": "Oscar Bobb",
                        "position": "Right Winger",
                        "dateOfBirth": "2003-07-12",
                        "nationality": "Norway"
                    },
                    {
                        "id": 171986,
                        "name": "Nico Gonzalez",
                        "position": "Central Midfield",
                        "dateOfBirth": "2002-01-03",
                        "nationality": "Spain"
                    },
                    {
                        "id": 146352,
                        "name": "Sávio",
                        "position": "Right Winger",
                        "dateOfBirth": "2004-04-10",
                        "nationality": "Brazil"
                    },
                    {
                        "id": 133242,
                        "name": "Rayan Cherki",
                        "position": "Attacking Midfield",
                        "dateOfBirth": "2003-08-17",
                        "nationality": "France"
                    },
                    {
                        "id": 122266,
                        "name": "Joško Gvardiol",
                        "position": "Left-Back",
                        "dateOfBirth": "2002-01-23",
                        "nationality": "Croatia"
                    },
                    {
                        "id": 99775,
                        "name": "Jeremy Doku",
                        "position": "Left Winger",
                        "dateOfBirth": "2002-05-27",
                        "nationality": "Belgium"
                    }
                ]
            }
        ]);
    });

    it('POST /clubs/search - Search for a club', async () => {
        const response = await httpRequester
        .post('/clubs')
        .send({
                term: "PSG",
        })
        .expect(201);
        expect(response.body).toEqual([
            {
                "id": 524,
                "name": "Paris Saint-Germain FC",
                "tla": "PSG",
                "logo": "https://crests.football-data.org/524.png",
                "address": "24, rue de Commandant Guibaud Paris 7501",
                "founded": 1904,
                "clubColors": "Red / Blue / White",
                "players": [
                    {
                        "id": 49244,
                        "name": "Matvei Safonov",
                        "position": "Goalkeeper",
                        "dateOfBirth": "1999-02-25",
                        "nationality": "Russia"
                    },
                    {
                        "id": 147896,
                        "name": "Lucas Chevalier",
                        "position": "Goalkeeper",
                        "dateOfBirth": "2001-11-06",
                        "nationality": "France"
                    },
                    {
                        "id": 245387,
                        "name": "Renato Marin",
                        "position": "Goalkeeper",
                        "dateOfBirth": "2006-07-10",
                        "nationality": "Italy"
                    },
                    {
                        "id": 277933,
                        "name": "Noham Kamara",
                        "position": "Defence",
                        "dateOfBirth": "2007-01-22",
                        "nationality": "France"
                    },
                    {
                        "id": 213217,
                        "name": "Kang-in Lee",
                        "position": "Midfield",
                        "dateOfBirth": "2001-02-19",
                        "nationality": "South Korea"
                    },
                    {
                        "id": 278378,
                        "name": "Wassim Slama",
                        "position": "Midfield",
                        "dateOfBirth": "2008-09-26",
                        "nationality": "France"
                    },
                    {
                        "id": 286944,
                        "name": "Yanis Khafi",
                        "position": "Midfield",
                        "dateOfBirth": "2006-04-23",
                        "nationality": "France"
                    },
                    {
                        "id": 278406,
                        "name": "Quentin Ndjantou",
                        "position": "Offence",
                        "dateOfBirth": "2007-07-23",
                        "nationality": "France"
                    },
                    {
                        "id": 286945,
                        "name": "Mathis Jangeal",
                        "position": "Offence",
                        "dateOfBirth": "2008-06-24",
                        "nationality": "France"
                    },
                    {
                        "id": 265040,
                        "name": "Ibrahim M'Baye",
                        "position": "Right Winger",
                        "dateOfBirth": "2008-01-24",
                        "nationality": "France"
                    },
                    {
                        "id": 246066,
                        "name": "Senny Mayulu",
                        "position": "Central Midfield",
                        "dateOfBirth": "2006-05-17",
                        "nationality": "France"
                    },
                    {
                        "id": 190877,
                        "name": "Joao Neves",
                        "position": "Defensive Midfield",
                        "dateOfBirth": "2004-09-27",
                        "nationality": "Portugal"
                    },
                    {
                        "id": 186089,
                        "name": "Warren Zaïre-Emery",
                        "position": "Central Midfield",
                        "dateOfBirth": "2006-03-08",
                        "nationality": "France"
                    },
                    {
                        "id": 178722,
                        "name": "Vitinha",
                        "position": "Central Midfield",
                        "dateOfBirth": "2000-02-13",
                        "nationality": "Portugal"
                    },
                    {
                        "id": 177522,
                        "name": "Desire Doue",
                        "position": "Left Winger",
                        "dateOfBirth": "2005-06-03",
                        "nationality": "France"
                    },
                    {
                        "id": 172762,
                        "name": "Bradley Barcola",
                        "position": "Left Winger",
                        "dateOfBirth": "2002-09-02",
                        "nationality": "France"
                    },
                    {
                        "id": 169204,
                        "name": "Lucas Beraldo",
                        "position": "Centre-Back",
                        "dateOfBirth": "2003-11-24",
                        "nationality": "Brazil"
                    },
                    {
                        "id": 144570,
                        "name": "Nuno Mendes",
                        "position": "Left-Back",
                        "dateOfBirth": "2002-06-19",
                        "nationality": "Portugal"
                    },
                    {
                        "id": 143573,
                        "name": "Illia Zabarnyi",
                        "position": "Centre-Back",
                        "dateOfBirth": "2002-09-01",
                        "nationality": "Ukraine"
                    },
                    {
                        "id": 114102,
                        "name": "William Pacho",
                        "position": "Centre-Back",
                        "dateOfBirth": "2001-10-16",
                        "nationality": "Ecuador"
                    },
                    {
                        "id": 113285,
                        "name": "Khvicha Kvaratskhelia",
                        "position": "Left Winger",
                        "dateOfBirth": "2001-02-12",
                        "nationality": "Georgia"
                    },
                    {
                        "id": 101431,
                        "name": "Gonçalo Ramos",
                        "position": "Centre-Forward",
                        "dateOfBirth": "2001-06-20",
                        "nationality": "Portugal"
                    },
                    {
                        "id": 3373,
                        "name": "Ousmane Dembélé",
                        "position": "Right Winger",
                        "dateOfBirth": "1997-05-15",
                        "nationality": "France"
                    },
                    {
                        "id": 3365,
                        "name": "Lucas Hernández",
                        "position": "Left-Back",
                        "dateOfBirth": "1996-02-14",
                        "nationality": "France"
                    },
                    {
                        "id": 3225,
                        "name": "Marquinhos",
                        "position": "Centre-Back",
                        "dateOfBirth": "1994-05-14",
                        "nationality": "Brazil"
                    },
                    {
                        "id": 53,
                        "name": "Achraf Hakimi",
                        "position": "Right-Back",
                        "dateOfBirth": "1998-11-04",
                        "nationality": "Morocco"
                    },
                    {
                        "id": 22,
                        "name": "Fabián Ruiz",
                        "position": "Central Midfield",
                        "dateOfBirth": "1996-04-03",
                        "nationality": "Spain"
                    }
                ]
            }
        ]);
    });

});
