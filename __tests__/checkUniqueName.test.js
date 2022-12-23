const { checkUniqueName } = require('../utils/utils')

describe('utils library test suite', () => {
    it('should be return false checkUniqueName', () => {
        expect(checkUniqueName('oli++++++')).toBe(false)
    })
})

describe("Name of the planet", function() {
    it("Only has valid characters", function() {
        expect(checkUniqueName('Test-Test.')).toBe(true);
    });
});

describe("Name of the planet", function() {
    it("has an invalid character", function() {
        expect(checkUniqueName('Test@Test')).toBe(false);
    });
});