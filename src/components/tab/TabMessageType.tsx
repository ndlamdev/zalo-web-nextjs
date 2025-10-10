/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 3:47 PM - 03/10/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { useState } from "react";

type Props = {};
export const TabMessageType = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<"priority" | "difficult">(
    "priority",
  );

  return (
    <div className={"relative flex gap-3 px-4 font-semibold text-gray-500 text-sm h-7"}>
      <button
        className={`w-[58px] cursor-pointer text-center hover:text-blue-700 ${currentTab === "priority" ? "text-blue-700" : ""}`}
        onClick={() => setCurrentTab("priority")}
      >
        Ưu tiên
      </button>
      <button
        className={`w-[36px] cursor-pointer text-center hover:text-blue-700 ${currentTab === "difficult" ? "text-blue-700" : ""}`}
        onClick={() => setCurrentTab("difficult")}
      >
        Khác
      </button>

      <div
        className={`tab-indicator absolute bottom-0 left-4 border-b-2 border-blue-700 ${currentTab === "difficult" ? "w-[36px] translate-x-[71px] transition-all duration-500" : "w-[52px] translate-x-[3px] transition-all duration-500"}`}
      ></div>
    </div>
  );
};
