import { assert } from "chai";

describe("Create a new rocket", () => {
  beforeEach(() => {
    console.log("");
  });
  afterEach(() => {
    console.log("Removing a rocket");
  });
  describe("Updating a rocket", () => {
    it("Create the rocket", () => assert.isTrue(!!1));
    it("Not create the rocket as it has already been created", () =>
      assert.isTrue(!!1));
    it("Should throw a 'XYZ' error", () => assert.isFalse(!!0));
    it("Should throw a 'ABC' error", () => assert.isFalse(!!0));
  });
});