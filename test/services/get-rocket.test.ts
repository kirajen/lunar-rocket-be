import { assert } from "chai";
import mongoose from "mongoose";

const Rocket = require("../../src/models/rockets");
import { mockRocketsNew } from "../mockData";
import { getRocketService } from "../../src/services/get-rocket.services";

mongoose
  .connect(
    "mongodb+srv://user:userpass@cluster0.gi7u1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => console.log("Connected to MongoDB " + res.version));

describe("Check that getting a single rocket works", () => {
  beforeEach(async () => {
    for (const rocket of mockRocketsNew) {
      await rocket.save();
    }
    console.log("Created Rockets");
  });
  afterEach(async () => {
    for (const rocket of mockRocketsNew) {
      await Rocket.deleteOne({ rocketId: rocket.rocketId });
    }
    console.log("Removing the created rockets");
  });
  describe("Returning with selected columns only", () => {
    it("Should return the selected columns of the rocket with the specified ID", async () => {
      const rocket = await getRocketService("0", false);
      console.log(rocket);
    });
    it("Should throw an 'Resource Not Found' error", async () =>
      assert.isFalse(!!0));
    it("Should return all columns of the rocket with the specified ID", async () =>
      assert.isTrue(!!1));
    it("Should throw an 'Resource Not Found' error", async () =>
      assert.isFalse(!!0));
  });
});
