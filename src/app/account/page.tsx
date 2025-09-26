import Image from "next/image";
import zaloLogo from "@/assets/images/zlogo.png";
import { ChooseLanguage } from "@/components/language/ChooseLanguage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập tài khoảng Zalo",
  description: "Trang đăng nhập chính thức của zalo",
};

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <header className={"flex flex-col items-center justify-center"}>
        <Image
          className={"mb-4"}
          src={zaloLogo}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>Đăng nhập tài khoản Zalo</p>
        <p>để kết nối với ứng dụng Zalo Web</p>
      </header>
      <main></main>
      <footer>
        <ChooseLanguage />
      </footer>
    </div>
  );
}
