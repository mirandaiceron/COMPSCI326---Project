import * as authService from "../services/authService.js";
import { createSession, destroySession } from "../sessions.js";

export function showLogin(req, res) {
  res.render("login");
}

export function showSignup(req, res) {
  res.render("signup");
}

//Handles user signup req
export async function signup(req, res) {
  try {
    await authService.signup(req.body);
    res.redirect("/login");
  } catch (error) {
      res.status(400).send(error.message);
    };
}

//Handles user login req
export async function login(req, res) {
  try {
    const user = await authService.login(req.body);

    const sessionId = createSession(user.id);

    res.cookie("sessionId", sessionId, {
      signed: true,
      httpOnly: true,
    });

    res.redirect("/resources");
    
  } catch (error) {
    res.status(401).send(error.message);
    };
  }

export function logout(req, res) {
  const sessionId = req.signedCookies.sessionId;
  if (sessionId) {
    destroySession(sessionId);
  }

  res.clearCookie("sessionId");
  res.redirect("/login");
  };

