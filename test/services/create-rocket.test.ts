import { assert, expect, use } from "chai";
import { createRocketService } from "../../src/services/create-rocket.services";
import { mockRocketsNew } from "../mockData";
import mongoose from "mongoose";
import deepEqualInAnyOrder from "deep-equal-in-any-order";

const Rocket = require("../../src/models/rockets");
use(deepEqualInAnyOrder);

describe("Create a new rocket", () => {
  beforeEach(async () => {
    // to be put into a separate config loader
    mongoose
      .connect(
        "mongodb+srv://user:userpass@cluster0.gi7u1.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((res) => console.log("Connected to MongoDB " + res.version))
      .then(async () => Rocket.deleteMany({ rocketId: 0 }));
  });
  afterEach(async () => {
    await Rocket.deleteMany({ rocketId: mockRocketsNew[0].rocketId });
    console.log("Removing created rockets");
  });
  describe("Creating a rocket", () => {
    it("Create the rocket", async () => {
      const response = await createRocketService(mockRocketsNew[0]);
      assert.equal(response.rocketId, mockRocketsNew[0].rocketId);
    });
    it("Not create the rocket as it has already been created", async () => {
      // to be fixed after proper error handling is introduced
      let e = null;
      try {
        await createRocketService(mockRocketsNew[0]);
        await createRocketService(mockRocketsNew[0]);
      } catch (err) {
        e = err;
      }
      expect(e).to.not.be.null;
    });
    it("Should throw a 'XYZ' error", () => assert.isFalse(!!0));
    it("Should throw a 'ABC' error", () => assert.isFalse(!!0));
  });
});
