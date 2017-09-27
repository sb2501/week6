var add = require("../simple_function").add;
var expect = require("chai").expect;


describe("Add function",function()
{
    it("must return sum of 2 numbers",function(done)
    {
        expect(add(2,4)).to.equals(6);
        done();
    });
});