import Express from "express";
import postRocket from "../controllers/post-rocket.controllers";
import getRocket from "../controllers/get-rocket.controllers";
import getRockets from "../controllers/get-rockets.controller";
import updateRocket from "../controllers/update-rocket.controllers";

const rocketsRouter = Express.Router();

rocketsRouter.get("/", getRockets);
rocketsRouter.get("/:rocketId", getRocket);
rocketsRouter.post("/", postRocket);
//post not a put because of redirect
rocketsRouter.post("/:rocketId", updateRocket);

export default rocketsRouter;
