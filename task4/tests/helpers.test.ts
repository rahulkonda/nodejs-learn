import * as helpers from '../helpers';

describe('helpers', () => {
    afterEach(() => jest.clearAllMocks());

    describe('validateInput', () => {
        it('should throw error when country is not supported', () => {
            expect(() => helpers.validateInput({ country: 'unsupported-country' })).toThrow();
        });

        it('should throw error when year is not current', () => {
            expect(() => helpers.validateInput({ year: 1980 })).toThrow();
        });

        it('should pass validation', () => {
            expect(() => helpers.validateInput({ year: new Date().getFullYear(), country: 'GB' })).not.toThrow();
        });
    });
    
    // describe('shortenPublicHoliday', () => {
    //     it('should return a shortened public holiday', () => {
    //     const holiday: helpers.PublicHoliday = {
    //         date: '2022-06-02',
    //         localName: 'test',
    //         name: 'test',
    //         countryCode: 'GB',
    //         fixed: true,
    //         counties: null,
    //         launchYear: 1967,
    //         type: 'public'
    //     };
    //     expect(helpers.shortenPublicHoliday(holiday)).toEqual({
    //         date: '2022-06-02',
    //         localName: 'test',
    //         name: 'test'
    //     });
    //     });
    // });
    

});