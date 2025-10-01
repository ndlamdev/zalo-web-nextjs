import Image from "next/image";
import zaloLogo from "@/assets/images/zlogo.png";
import { ChooseLanguage } from "@/components/language/ChooseLanguage";
import type { Metadata } from "next";
import { ButtonMenu } from "@/components/login/menu/ButtonMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import bannerIcon from "@/assets/images/banner_icon.svg";
import { QrLogin } from "@/components/qr/QrLogin";

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
      <main>
        <div className={"w-135 rounded-xl bg-white shadow-lg"}>
          <div
            className={"relative border-b-[1px] border-gray-200 p-4 text-black"}
          >
            <h4 className={"text-center text-lg font-bold"}>
              Đăng nhập bằng QR
            </h4>
            <div className={"absolute top-3 right-4"}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ButtonMenu />
                </DropdownMenuTrigger>
                <DropdownMenuContent align={"end"}>
                  <DropdownMenuItem className={"cursor-pointer"}>
                    Đăng nhập với mật khẩu
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className={"pb-2"}>
            <div
              className={
                "mx-auto my-10 size-fit rounded-lg border-[1px] border-gray-200 p-1"
              }
            >
              <QrLogin
                size={220}
                title={"Qr đăng nhập zalo"}
                minVersion={10}
                marginSize={1}
              />
              <p className={"mt-2 text-center text-lg text-blue-700"}>
                Chỉ dùng để đăng nhập
              </p>
              <p className={"text-center text-lg"}>Zalo trên máy tính</p>
            </div>
            <div
              className={
                "m-4 flex items-center gap-4 rounded-lg border-[1px] p-2"
              }
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
      <footer className={"mt-15"}>
        <ChooseLanguage />
      </footer>
    </div>
  );
}
