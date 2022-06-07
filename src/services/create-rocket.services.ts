import APIError from "../errors/api-error";

export async function createRocketService(rocket) {
  try {
    return await rocket.save();
  } catch (err) {
    throw APIError.ServerError;
  }
}
