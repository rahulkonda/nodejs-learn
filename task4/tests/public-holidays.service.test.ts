import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import * as publicHolidayService from '../services/public-holidays.service';
import * as helper from '../helpers';

jest.mock('../helpers', () => ({
    validateInput: jest.fn(),
    shortenPublicHoliday: jest.fn((holiday) => holiday),
}));
// const instance = axios.create();
// const axiosMockAdaptor = new axiosMock(instance);
// axios.get = instance.get; 
const axiosMockAdaptor = new axiosMock(axios);

describe('publicHolidaysService', () => {
    afterEach(() => {
        axiosMockAdaptor.reset();
        jest.clearAllMocks();
    });

    it('should return list of public holidays', async () => {
        const mockData = [{ name: 'holiday1' }, { name: 'holiday2' }];
        axiosMockAdaptor.onGet('https://date.nager.at/api/v3/PublicHolidays/2024/US').reply(200, mockData);

        const result = await publicHolidayService.getListOfPublicHolidays(2024, 'US');

        expect(result).toEqual(mockData);
        expect(helper.validateInput).toHaveBeenCalledWith({ year: 2024, country: 'US' });
    });
    it('should return the next public holiday', async () => {
        const mockHoliday = { name: 'nextHoliday' };
        axiosMockAdaptor.onGet('https://date.nager.at/api/v3/NextPublicHolidays/US').reply(200, [mockHoliday]);

        const result = await publicHolidayService.getNextPublicHolidays('US');
        
	expect(result).toEqual([mockHoliday]);
        expect(helper.validateInput).toHaveBeenCalledWith({ country: 'US' });
    });

    it('should check if today is a public holiday', async () => {
        axiosMockAdaptor.onGet('https://date.nager.at/api/v3/IsTodayPublicHoliday/US').reply(200, []);

        const result = await publicHolidayService.checkIfTodayIsPublicHoliday('US');
        
        expect(result).toEqual(true);
        expect(helper.validateInput).toHaveBeenCalledWith({ country: 'US' });
    });
});