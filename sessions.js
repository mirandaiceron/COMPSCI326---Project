import { randomUUID } from "crypto";

const sessions = new Map();

export function createSession(userId) {
  const sessionId = randomUUID();
  sessions.set(sessionId, {
    userId,
  });
  return sessionId;
}

export function getSession(sessionId) {
  return sessions.get(sessionId);
}

export function destroySession(sessionId) {
  sessions.delete(sessionId);
}
