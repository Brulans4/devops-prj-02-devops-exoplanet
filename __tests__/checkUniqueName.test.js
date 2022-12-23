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

