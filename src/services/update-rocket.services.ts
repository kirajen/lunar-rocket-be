import { getRocketService } from "./get-rocket.services";
import { validateMissionChangeSchema } from "../middleware/validators/validate-rocket-mission-changed";
import { validateSpeedChangeSchema } from "../middleware/validators/validate-rocket-speed-change";
import { validateExplodedSchema } from "../middleware/validators/validate-rocket-exploded";

const Rocket = require("../models/rockets");

export async function updateRocketService(
  rocketId: string,
  msgBody,
  msgMetadata
) {
  let updateObject = {};
  try {
    let rocket = await getRocketService(rocketId, true);
    switch (msgMetadata.messageType) {
      case "RocketSpeedIncreased":
        validateSpeedChangeSchema(msgBody);
        updateObject["currentSpeed"] = rocket.currentSpeed + msgBody.by;
        updateObject["lastMessageSpeedIncrease"] = msgMetadata.messageNumber;
        updateObject["lastSpeedIncrease"] = msgMetadata.messageTime;
        break;
      case "RocketSpeedDecreased":
        validateSpeedChangeSchema(msgBody);
        updateObject["currentSpeed"] = rocket.currentSpeed - msgBody.by;
        updateObject["lastMessageSpeedDecrease"] = msgMetadata.messageNumber;
        updateObject["lastSpeedDecrease"] = msgMetadata.messageTime;
        break;
      case "RocketMissionChanged":
        validateMissionChangeSchema(msgBody);
        updateObject["mission"] = msgBody.mission;
        break;
      case "RocketExploded":
        // could just be deleted, but keeping track for future analytics
        validateExplodedSchema(msgBody);
        updateObject["exploded"] = true;
        updateObject["explodedReason"] = msgBody.reason;
        break;
    }
    return await Rocket.updateOne(
      { rocketId: rocketId },
      { $set: updateObject }
    );
  } catch (err) {
    throw err;
  }
}
