export async function createRocketService(rocket) {
  try {
    return await rocket.save();
  } catch (err) {
    throw err;
  }
}
