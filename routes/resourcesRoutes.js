import express from "express";
import {
  showResources,
  addResource,
  removeResource,
} from "../controllers/resourcesController.js";
import { requireLogin } from "../middleware/requireLogin.js";

const router = express.Router();
router.get("/", showResources);
router.post("/", requireLogin, addResource);
router.delete("/:id", requireLogin, removeResource);

export default router;
