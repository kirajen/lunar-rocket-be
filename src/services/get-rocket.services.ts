import { getRocketColumns } from "../constants/getRocketColumns";
import APIError from "../errors/api-error";

const Rocket = require("../models/rockets");

export async function getRocketService(rocketId: string, allColumns: boolean) {
  try {
    return allColumns
      ? await Rocket.findOne({ rocketId: rocketId })
      : await Rocket.findOne({ rocketId: rocketId }, getRocketColumns);
  } catch (err) {
    throw APIError.ResourceNotFound('Rocket', rocketId);
  }
}
