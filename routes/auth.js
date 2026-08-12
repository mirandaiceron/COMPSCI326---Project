import express from "express";
import { showLogin, showSignup, signup, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.get("/login", showLogin);
router.get("/signup", showSignup);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
