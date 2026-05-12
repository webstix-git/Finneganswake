import { NextResponse } from "next/server";

// Stub endpoint. Wire to Resend / Nodemailer / SES etc. The team should set:
//   CONTACT_TO=finneganssgf@gmail.com
//   RESEND_API_KEY=...
// and replace the body of this handler with a real send call.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  console.log("[contact]", body);
  return NextResponse.json({ ok: true });
}
