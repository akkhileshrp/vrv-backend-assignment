import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./db/dbconnect";
import { errorHandler } from "./middleware/error.middleware";
import router from "./routes/auth.routes";
import routers from "./routes/users.routes";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", router);
app.use("/api/v1/roles", routers);
app.use(cookieParser());
app.use(errorHandler);

connectDatabase();

app.listen(PORT, () => {
  console.log("Server is up and running");
});
