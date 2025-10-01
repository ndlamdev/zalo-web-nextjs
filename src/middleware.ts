/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 7:42 PM - 01/10/2025
 * User: kimin
 **/

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("REFRESH_TOKEN"); // ví dụ token lưu trong cookie
  const { pathname } = req.nextUrl;
  console.log(token, pathname);

  // Nếu chưa login mà vào / hoặc các route cần bảo vệ
  if (!token && pathname === "/") {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  // Nếu đã login mà vào /login thì redirect về trang chủ
  if (token && pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Cấu hình matcher để middleware chỉ chạy cho các route cần check
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
