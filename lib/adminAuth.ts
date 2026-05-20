import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "fw_admin_session";

function sessionToken() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return createHash("sha256").update(`fw-admin:${password}`).digest("hex");
}

export function isAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;

  const givenBuffer = Buffer.from(password);
  const expectedBuffer = Buffer.from(expected);
  if (givenBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(givenBuffer, expectedBuffer);
}

export function getAdminSessionToken() {
  return sessionToken();
}

export async function isAdminSession() {
  const token = sessionToken();
  if (!token) return false;

  return (await cookies()).get(ADMIN_COOKIE)?.value === token;
}
