import express from "express";
import {
  showResources,
  addResource,
} from "../controllers/resourcesController.js";

const router = express.Router();
router.get("/", showResources);
router.post("/", addResource);

export default router;
