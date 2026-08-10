import * as authService from "../services/authService.js";
import { createSession, destroySession } from "../sessions.js";

//Handles user signup req
export async function signup(req, res) {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
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

    res.status(200).json({
      loggedIn: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
}

export function logout(req, res) {
  const sessionId = req.signedCookies.sessionId;
  if (sessionId) {
    destroySession(sessionId);
  }

  res.clearCookie("sessionId");
  res.status(200).json({
    loggedOut: true,
  });
}
