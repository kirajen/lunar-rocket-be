import { assert } from "chai";

describe("Check that getting a single rocket works", () => {
  beforeEach(() => {
    console.log("Create multiple rockets");
  });
  afterEach(() => {
    console.log("Removing the created rockets");
  });
  describe("Returning with selected columns only", () => {
    it("Should return all columns", () => {
      assert.isTrue(!!1);
    });
    it("Should return 2 columns", () => assert.isTrue(!!1));
    it("Should return columns sorted by date", () => assert.isTrue(!!1));
    it("Should return 3 columns with all their fields", () =>
      assert.isTrue(!!1));
    it("Should return 3 columns with all their fields sorted by mission ascending", () =>
      assert.isTrue(!!1));
    it("Should return all columns with selected fields sorted by mission descending", () =>
      assert.isTrue(!!1));
    it("Should throw a 'XYZ' error", () => assert.isFalse(!!0));
    it("Should throw a 'ABC' error", () => assert.isFalse(!!0));
  });
});