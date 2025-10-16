/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 4:41 AM - 15/10/2025
 *  User: kimin
 **/

"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ButtonMenu } from "@/components/login/menu/ButtonMenu";
import { QrLogin } from "@/components/login/qr/QrLogin";
import Image from "next/image";
import bannerIcon from "@/assets/images/banner_icon.svg";
import { useState } from "react";
import { UsernamePasswordLogin } from "@/components/login/form/UsernamePasswordLogin";

export default function LoginFragment() {
  const [loginType, setLoginType] = useState<"qr" | "username-password">("qr");

  return (
    <main>
      <div className={"w-135 rounded-xl bg-white shadow-lg"}>
        <div
          className={"relative border-b-[1px] border-gray-200 p-4 text-black"}
        >
          <h4 className={"text-center text-lg font-bold"}>
            {loginType === "qr"
              ? "Đăng nhập bằng QR"
              : "Đăng nhập với mật khẩu"}
          </h4>
          {loginType === "qr" && (
            <div className={"absolute top-3 right-4"}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ButtonMenu />
                </DropdownMenuTrigger>
                <DropdownMenuContent align={"end"}>
                  <DropdownMenuItem
                    className={"cursor-pointer"}
                    onClick={() => setLoginType("username-password")}
                  >
                    Đăng nhập với mật khẩu
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
        <div className={"pb-2"}>
          {loginType === "qr" ? (
            <QrLogin
              size={220}
              title={"Qr đăng nhập zalo"}
              minVersion={10}
              marginSize={1}
            />
          ) : (
            <UsernamePasswordLogin onQrLoginAction={() => setLoginType("qr")} />
          )}
          <div
            className={"m-4 flex items-center gap-4 rounded-lg border-1 p-2"}
          >
            <Image src={bannerIcon} alt={""} width={75} height={75} />
            <div className={"flex flex-col text-sm"}>
              <p className={"font-bold"}>
                Nâng cao hiệu quả công việc với Zalo PC
              </p>
              <p>
                Gửi file lớn lên đến 1 GB, chụp màn hình, gọi video và nhiều
                tiện ích hơn nữa
              </p>
            </div>
            <button
              className={
                "h-10 cursor-pointer rounded-lg bg-blue-500 px-4 text-nowrap text-white"
              }
            >
              Tải ngay
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
