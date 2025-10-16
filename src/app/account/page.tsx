import Image from "next/image";
import zaloLogo from "@/assets/images/zlogo.png";
import { ChooseLanguage } from "@/components/language/ChooseLanguage";
import type { Metadata } from "next";
import LoginFragment from "@/components/fragments/login";

export const metadata: Metadata = {
  title: "Đăng nhập tài khoảng Zalo",
  description: "Trang đăng nhập chính thức của zalo",
};

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-3 pb-20 font-sans sm:p-15">
      <header className={"flex flex-col items-center justify-center"}>
        <Image
          className={"mb-1 scale-[65%]"}
          src={zaloLogo}
          alt="Next.js logo"
          width={175}
          height={38}
          priority
        />
        <p className={"flex flex-col text-lg text-gray-700"}>
          Đăng nhập tài khoản Zalo
        </p>
        <p className={"flex flex-col text-lg text-gray-700"}>
          để kết nối với ứng dụng Zalo Web
        </p>
      </header>
      <LoginFragment />
      <footer className={"mt-15"}>
        <ChooseLanguage />
      </footer>
    </div>
  );
}
