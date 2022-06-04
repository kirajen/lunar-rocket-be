import { assert } from "chai";

describe("Validate update bodie's", () => {
    beforeEach(() => {
        console.log("Create a rocket");
    });
    afterEach(() => {
        console.log("Removing a rocket");
    });
    describe("Updating a rocket", () => {
        it("Should accept the speed increase", () => assert.isTrue(!!1));
        it("Should deny the speed decrease", () => assert.isTrue(!!1));
        it("Should accept launch info", () => assert.isTrue(!!1));
        it("Should deny the launch info", () => assert.isTrue(!!1));
        it("Should accept the mission change", () => assert.isTrue(!!1));
        it("Should deny the mission change", () => assert.isTrue(!!1));
        it("Should accept the explosion", () => assert.isTrue(!!1));
        it("Should deny the explosion", () => assert.isTrue(!!1));
        it("Should throw a 'XYZ' error", () => assert.isFalse(!!0));
        it("Should throw a 'ABC' error", () => assert.isFalse(!!0));
    });
});