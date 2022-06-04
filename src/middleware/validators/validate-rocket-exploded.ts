import validate from "../../utils/validate";
import Joi from "joi";

const explodedSchema = Joi.object().keys({ reason: Joi.string() });

export function validateExplodedSchema(object) {
  validate(object, explodedSchema);
}