import { Search } from "@/components/search";
import Image from "next/image";
import zaloIcon from "./icon.png";
import { MainMenu } from "@/components/menu/MainMenu";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-[65px_1fr] font-sans">
      <div className={"flex flex-col items-center bg-blue-600"}>
        <Image
          src={zaloIcon.src}
          alt={""}
          className={"mt-8 rounded-full border-[1.8px] border-gray-400"}
          width={48}
          height={48}
        />
        <MainMenu />
      </div>
      <div className={"grid h-full grid-cols-[345px_1fr] bg-white"}>
        <div className={"border-r-[1px] border-gray-300"}>
          <div className={"p-4"}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
