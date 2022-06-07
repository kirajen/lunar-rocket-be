import { Request, Response } from "express";

export default async function redirectMessages(req: Request, res: Response) {
  try {
    if (req.body.metadata.messageType === "RocketLaunched") {
      res.redirect(307, "api/rockets");
    } else {
      res.redirect(307, `api/rockets/${req.body.metadata.channel}`);
    }
  } catch (err) {
    res.json(err);
  }
}
