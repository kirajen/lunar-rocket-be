import { getRocketService } from "./get-rocket.services";
import { validateMissionChangeSchema } from "../middleware/validators/validate-rocket-mission-changed";
import { validateSpeedChangeSchema } from "../middleware/validators/validate-rocket-speed-change";
import { validateExplodedSchema } from "../middleware/validators/validate-rocket-exploded";
import { isOutOfOrder } from "../utils/handleOutOfOrder";
import { isDuplicate } from "../utils/handleDuplicates";
import APIError from "../errors/api-error";

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
        if (
          !isDuplicate(
            msgMetadata.messageNumber,
            rocket.lastMessageSpeedIncrease
          )
        ) {
          updateObject["currentSpeed"] = rocket.currentSpeed + msgBody.by;
          updateObject["lastMessageSpeedIncrease"] = msgMetadata.messageNumber;
          updateObject["lastSpeedIncrease"] = msgMetadata.messageTime;
        }
        break;
      case "RocketSpeedDecreased":
        validateSpeedChangeSchema(msgBody);
        // updating the mission with a duplicate shouldnt really matter, idempotent
        if (
          !isDuplicate(msgMetadata.messageType, rocket.lastMessageSpeecDecrease)
        ) {
          // allows speed to be negative - treat as velocity?
          updateObject["currentSpeed"] = rocket.currentSpeed - msgBody.by;
          updateObject["lastMessageSpeedDecrease"] = msgMetadata.messageNumber;
          updateObject["lastSpeedDecrease"] = msgMetadata.messageTime;
        }
        break;
      case "RocketMissionChanged":
        validateMissionChangeSchema(msgBody);
        if (
          !isOutOfOrder(msgMetadata.messageTime, rocket.lastUpdatedMission) &&
          !isDuplicate(msgMetadata.messageNumber, rocket.lastMessageMission)
        ) {
          updateObject["mission"] = msgBody.mission;
        }
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
    throw APIError.ServerError;
  }
}
