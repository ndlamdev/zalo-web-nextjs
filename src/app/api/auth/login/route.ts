/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 4:12 PM - 16/10/2025
 * User: kimin
 **/

import { NextResponse } from "next/server";
import { saveCookie } from "@/utils/cookie.util";

export async function POST(req: Request) {
  const body = await req.json();

  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/v1/login`, {
    method: "POST",
    body: JSON.stringify({
      phone_number: `${body.code}/${body.phoneNumber}`,
      password: body.password,
    }),
    credentials: "include",
  })
    .then(async (res) => {
      await saveCookie(res.headers.getSetCookie());
      const body = await res.json();
      return NextResponse.json(body, {status: res.status});
    })
    .catch((e) => NextResponse.json({ code: 500, error: e }, { status: 500 }));
}
