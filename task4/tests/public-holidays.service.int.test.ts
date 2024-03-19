import * as publicHolidayService from '../services/public-holidays.service';

describe('Integration Test publicHolidaysService', () => {
    it('should fetch real list of public holidays for given year and country code', async () => {
        const year = new Date().getFullYear();
        const countryCode = 'FR';
        const response = await publicHolidayService.getListOfPublicHolidays(year, countryCode);
        expect(Array.isArray(response)).toBeTruthy();
        expect(response.length).toBeGreaterThan(0);
    });

    it('should fetch if today is a public holiday for given country code', async () => {
        const countryCode = 'FR';
        const response = await publicHolidayService.checkIfTodayIsPublicHoliday(countryCode);
        expect(typeof response).toBe('boolean');
    });

    it('should fetch the next public holiday for given country code', async () => {
        const countryCode = 'FR';
        const response = await publicHolidayService.getNextPublicHolidays(countryCode);
        expect(Array.isArray(response)).toBeTruthy();
    });
});