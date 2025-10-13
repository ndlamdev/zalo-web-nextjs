import Image from "next/image";
import zaloIcon from "./icon.png";
import { MainMenu } from "@/components/menu/MainMenu";
import { TabMessageType } from "@/components/tab/TabMessageType";

import * as React from "react";
import { ClassificationFriends } from "@/components/dropdown/ClassificationFriends";
import { MoreOptionMessage } from "@/components/dropdown/MoreOptionMessage";
import { MynauiTag } from "@/assets/icons/MynauiTag";
import { EpArrowLeft } from "@/assets/icons/EpArrowLeft";
import ChatFragment from "@/components/fragments/chat";

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
      <ChatFragment />
    </div>
  );
}
