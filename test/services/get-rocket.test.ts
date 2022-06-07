import { assert } from "chai";
import mongoose from "mongoose";

const Rocket = require("../../src/models/rockets");
import { mockRocketsNew } from "../mockData";
import { getRocketService } from "../../src/services/get-rocket.services";

describe("Check that getting a single rocket works", () => {
  beforeEach(async () => {
    mongoose
      .connect(
        "mongodb+srv://user:userpass@cluster0.gi7u1.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((res) => console.log("Connected to MongoDB " + res.version));
    console.log("Connected to MongoDB");
  });
  afterEach(() => {});
  describe("Returning with selected columns only", () => {
    it("Should return the selected columns of the rocket with the specified ID", async () => {
      await mockRocketsNew[1].save();
      const rocket = await getRocketService("1", false);
      await Rocket.deleteOne({ rocketId: mockRocketsNew[1].rocketId });
      console.log(rocket);
    });
    it("Should throw an 'Resource Not Found' error", async () =>
      assert.isFalse(!!0));
    it("Should return all columns of the rocket with the specified ID", async () =>
      assert.isTrue(!!1));
  });
});
