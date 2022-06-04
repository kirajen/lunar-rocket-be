import validate from "../../utils/validate";
import Joi from "joi";

const missionChangeSchema = Joi.object().keys({ newMission: Joi.number() });

export function validateMissionChangeSchema(object) {
    validate(object, missionChangeSchema)
}