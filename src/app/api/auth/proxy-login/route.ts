/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 9:02 PM - 01/10/2025
 * User: kimin
 **/

import { NextResponse } from "next/server";
import { saveCookie } from "@/utils/cookie.util";

export async function POST(req: Request) {
  const body = await req.json();
  const cookie = body.cookie;

    await saveCookie(cookie);

    return NextResponse.json({ ok: true });
}