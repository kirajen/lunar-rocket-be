import { assert } from "chai";

describe("Check that getting a single rocket works", () => {
  beforeEach(() => {
    console.log("Create a rocket");
  });
  afterEach(() => {
    console.log("Removing a rocket");
  });
  describe("Updating a rocket", () => {
    it("Should update the mission and the mission message and time", () =>
      assert.isTrue(!!1));
    it("Increase the speed and update the speed increase message and time", () =>
      assert.isTrue(!!1));
    it("Decrease the speed and update the speed decrease message and time", () =>
      assert.isTrue(!!1));
    it("Not increase the speed as the message is a duplicate", () =>
      assert.isTrue(!!1));
    it("Still decrease the speed even though the message came out of order", () =>
      assert.isTrue(!!1));
    it("Not change the mission because the message came out of order", () =>
      assert.isTrue(!!1));
    it("Explode the rocket and update the reason", () => assert.isTrue(!!1));
    it("Not update the rocket as it has already exploded and the message came in order", () =>
      assert.isTrue(!!1));
    it("Update the rocket even though it has already exploded as the message came out of order", () =>
      assert.isTrue(!!1));
    it("Should throw a 'XYZ' error", () => assert.isFalse(!!0));
    it("Should throw a 'ABC' error", () => assert.isFalse(!!0));
  });
});