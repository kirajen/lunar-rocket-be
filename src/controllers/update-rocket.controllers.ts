import { Request, Response } from "express";
import { updateRocketService } from "../services/update-rocket.services";

export default async function updateRocket(req: Request, res: Response) {
  const rocketId = req.params.rocketId;
  const updateObject = req.body.message;
  const messageMetadata = req.body.metadata;

  try {
    const updatedRocket = await updateRocketService(
      rocketId,
      updateObject,
      messageMetadata
    );
    res.json(updatedRocket);
  } catch (err) {
    res.json(err);
  }
}
