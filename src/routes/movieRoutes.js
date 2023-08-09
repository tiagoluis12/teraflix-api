import express from "express";
const router = express.Router();

// GET, POST, PUT, PATCH, DELETE
import controllers from "../controllers/movieControllers.js";
router.get("/", controllers.getAll);

export default router;
