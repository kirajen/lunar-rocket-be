import { NextFunction, Request, Response } from "express";
import validate from "../../utils/validate";
import Joi from "joi";

export const rocketMessageSchema = Joi.object().keys({
  metadata: Joi.object().keys({
    channel: Joi.string().required(),
    messageNumber: Joi.number().required(),
    messageTime: Joi.string(),
    messageType: Joi.string().valid(
      "RocketLaunched",
      "RocketSpeedIncreased",
      "RocketSpeedDecreased",
      "RocketExploded",
      "RocketMissionChanged"
    ),
  }),
  message: Joi.object(),
});

export default function validateRocketMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  validate(req.body, rocketMessageSchema);
  return next();
}
