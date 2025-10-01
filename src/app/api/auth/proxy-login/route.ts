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
  const cookie = body.cookie;

  // Gọi sang Spring
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include", // quan trọng để Spring trả Set-Cookie
  });

  // Nếu Spring trả cookie thì parse và set lại cho Next.js
  if (cookie) {
    // Ở đây giả sử Spring set refresh_token
    const parsedCookies = setCookie.parse(cookie, {
      map: false, // trả ra array thay vì object map
    });
    const cookieStore = await cookies();
    // Duyệt qua từng cookie và set lại cho domain Next.js
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

  return NextResponse.json({ ok: true });
}
