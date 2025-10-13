/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 9:02 PM - 01/10/2025
 * User: kimin
 **/

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import setCookie from "set-cookie-parser";

export async function POST(req: Request) {
  const body = await req.json();

  localStorage.setItem("phone_number", body.data.phone_number);
  localStorage.setItem("phone_number_code", body.data.phone_number_code);
  localStorage.setItem("access_token", body.data.access_token);

  await saveCookie(body.data.refresh_token);

  return NextResponse.json({ ok: true });
}

async function saveCookie(cookie: string) {
  const parsedCookies = setCookie.parse(cookie, {
    map: false, // trả ra array thay vì object map
  });
  const cookieStore = await cookies();
  parsedCookies.forEach((c) => {
    cookieStore.set(c.name, c.value, {
      httpOnly: c.httpOnly,
      secure: c.secure,
      sameSite: (c.sameSite as "lax" | "strict" | "none") || "lax",
      path: c.path || "/",
      expires: c.expires,
      maxAge: c.maxAge,
    });
  });
}
