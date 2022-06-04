import { Request, Response } from "express";
import { getRocketService } from "../services/get-rocket.services";

export default async function getRocket(req: Request, res: Response) {
  try {
    const allColumns = req.query.allColumns ? req.query.allColumns : false;
    const rocket = await getRocketService(req.params.rocketId, allColumns);
    res.json(rocket);
  } catch (err) {
    res.json(err);
  }
}