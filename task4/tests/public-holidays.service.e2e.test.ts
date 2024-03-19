import request from 'supertest';
import {PublicHoliday} from '../types'

const PUBLIC_HOLIDAYS_API = 'https://date.nager.at/api/v3'; 

describe('Public Holidays API', () => {
  describe('/PublicHolidays', () => {
    test('should return 200 and list of public holidays for the current year', async () => {
      const year = new Date().getFullYear();
      const country = 'FR'; 
      const { status, body } = await request(PUBLIC_HOLIDAYS_API).get(`/PublicHolidays/${year}/${country}`);

      expect(status).toEqual(200);
    //   [
    //     {
    //       "date": "2024-03-19",
    //       "localName": "string",
    //       "name": "string",
    //       "countryCode": "string",
    //       "fixed": true,
    //       "global": true,
    //       "counties": [
    //         "string"
    //       ],
    //       "launchYear": 0,
    //       "types": [
    //         "Public"
    //       ]
    //     }
    //   ]
      body.forEach((holiday: PublicHoliday) => {
        expect(holiday).toEqual({
            date: expect.any(String),
            localName: expect.any(String),
            name: expect.any(String),
            countryCode: expect.any(String),
            fixed: expect.any(Boolean),
            global: expect.any(Boolean),
            counties: null,
            launchYear: null,
            types: expect.any(Array),
        });
      });
    });

    test('should return 200 and the data about whether today is a public holiday', async () => {
      const country = 'FR'; 
      const { status, body } = await request(PUBLIC_HOLIDAYS_API).get(`/IsTodayPublicHoliday/${country}`);
      expect([200,204]).toContain(status); 
      expect(body).toEqual({});
    });
  });
});