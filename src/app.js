import express from "express";
const app = express();

//import cors from "cors";
import cors from "cors";
app.use(cors());

app.use(express.json());

import config from "./database/config.js";
config.connect();

//import routes

import movies from "./routes/movieRoutes.js";
app.use("/movies", movies);

export default app;
