import * as swaggerUi from "swagger-ui-express";
import Express from "express";
import rocketsRouter from "./routes/rockets.routes";
import * as swaggerDocument from "./swagger.json";
import mongoose from "mongoose";
import redirectMessages from "./controllers/redirect-messages.controllers";
import "dotenv/config";
import validateRocketMessage from "./middleware/validators/validate-rocket-messages.validators";

const app = Express();
const port: number = 3000;

// Middlewares
app.use(Express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/rockets", rocketsRouter);

app.post("/", validateRocketMessage, redirectMessages);

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log("Connected to MongoDB " + res.version))
  .then(() =>
    app.listen(port, () =>
      console.log(`The rocket app is running on port ${port}`)
    )
  )
  .catch((err) => console.log(err));
