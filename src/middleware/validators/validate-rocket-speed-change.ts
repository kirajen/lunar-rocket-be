import validate from "../../utils/validate";
import Joi from "joi";

const speedChangeSchema = Joi.object().keys({ by: Joi.number() });

export function validateSpeedChangeSchema(object) {
    validate(object, speedChangeSchema)
}