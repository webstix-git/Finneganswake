import { isAdminSession } from "@/lib/adminAuth";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ loggedIn: await isAdminSession() });
}
