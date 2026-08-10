import { getSession } from "../sessions.js";
import { findById } from "../repositories/usersRepository.js";

export async function attachUser(req, res, next) {
  const sessionId = req.signedCookies.sessionId;

  const session = sessionId ? getSession(sessionId) : undefined;

  if (session) {
    const user = await findById(session.userId);
    if (user) {
      req.user = {
        id: user._id.toString(),
        role: user.role,
      };
    }
  }
  next();
}
