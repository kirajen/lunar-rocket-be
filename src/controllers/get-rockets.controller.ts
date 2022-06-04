import { Request, Response } from "express";
import {getRocketsService} from "../services/get-rockets.service";

export default async function getRockets(req: Request, res: Response) {
  try {
    const rockets = await getRocketsService(req.query);
    res.json(rockets);
  } catch (err) {
    res.json(err);
  }
}
