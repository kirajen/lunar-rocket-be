import { getRocketColumns } from "../constants/getRocketColumns";

const Rocket = require("../models/rockets");

export async function getRocketsService(query) {
  try {
    const queryParams = query.onlyActive ? query.onlyActive : {};
    let queryOptions = {};
    if (query.sorting) {
      queryOptions["sort"][query.sorting] = +query.sortDir ? +query.sortDir : 1;
    }
    if (query.queryLimit) {
      queryOptions["limit"] = query.queryLimit;
    }
    return query.allColumns
      ? await Rocket.find(queryParams, queryOptions).exec()
      : await Rocket.find(queryParams, getRocketColumns, queryOptions).exec();
  } catch (err) {
    throw err;
  }
}
