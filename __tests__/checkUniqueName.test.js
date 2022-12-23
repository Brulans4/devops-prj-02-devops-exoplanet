const { checkUniqueName } = require('../utils/utils')

describe('utils library test suite', () => {
    it('should be return false checkUniqueName', () => {
        expect(checkUniqueName('oli++++++')).toBe(false)
    })
})

describe("name of planet", function(){
    it("has not only caps", function(){
        expect(checkUniqueName("test")).toBe(false);
    })
})


describe("name of planet", function() {
    it("has not only caps", function(){
        expect(checkUniqueName('TeST')).toBe(false);
    });
});

describe("name of planet", function() {
    it("has only caps", function(){
        expect(checkUniqueName('TEST')).toBe(true);
    });
});

describe("Name of the planet", function() {
    it("Only has valid characters", function() {
        expect(checkUniqueName('TEST-TEST.')).toBe(true);
    });
});

describe("Name of the planet", function() {
    it("has an invalid character", function() {
        expect(checkUniqueName('TEST@TEST')).toBe(false);
    });
});

describe("Name of the planet", function() {
    it("invalide name", function() {
        expect(checkUniqueName('Trappiste$****01****-00')).toBe(false);
    });
});
