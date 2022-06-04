import { Request, Response } from "express";
import { createRocketService } from "../services/create-rocket.services";

const Rocket = require("../models/rockets");

export default async function postRocket(req: Request, res: Response) {
  const rocket = new Rocket({
    rocketId: req.body.metadata.channel,
    rocketType: req.body.message.type,
    mission: req.body.message.mission,
    launchSpeed: req.body.message.launchSpeed,
    currentSpeed: req.body.message.launchSpeed,
    lastSpeedIncrease: null,
    lastSpeedDecrease: null,
    lastUpdatedMission: req.body.metadata.messageTime,
    lastMessageSpeedIncrease: null,
    lastMessageSpeedDecrease: null,
    lastMessageMission: req.body.metadata.messageNumber,
    exploded: false,
    explodedReason: "",
  });
  try {
    const createdRocket = await createRocketService(rocket);
    res.json(createdRocket);
  } catch (err) {
    res.json(err);
  }
}
