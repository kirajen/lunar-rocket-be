import { getRocketColumns } from "../constants/getRocketColumns";

const Rocket = require("../models/rockets");

export async function getRocketService(rocketId: string, allColumns: boolean) {
  try {
    return allColumns
      ? await Rocket.findOne({ rocketId: rocketId })
      : await Rocket.findOne({ rocketId: rocketId }, getRocketColumns);
  } catch (err) {
    throw err;
  }
}
