/**
* Author: Nguyen Dinh Lam
* Email: kiminonawa1305@gmail.com
* Phone number: +84 855354919
* Create at: 5:04 PM - 16/10/2025
* User: kimin
**/
import setCookie from "set-cookie-parser";
import {cookies} from "next/headers";

export async function saveCookie(cookie: string|string[]) {
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