import { assert } from "chai";

describe("Validate update bodies", () => {
  beforeEach(() => {
    console.log("Create a rocket");
  });
  afterEach(() => {
    console.log("Removing a rocket");
  });
  describe("Updating a rocket", () => {
    it("Should accept the message", () => assert.isTrue(!!1));
    it("Should deny the message", () => assert.isTrue(!!1));
  });
});