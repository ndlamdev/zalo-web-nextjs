/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 6:23 AM - 04/10/2025
 *  User: kimin
 **/

"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SolarAltArrowDownLinear } from "@/assets/icons/SolarAltArrowDownLinear";
import { SolarMenuDotsBold } from "@/assets/icons/SolarMenuDotsBold";

type Props = {};
export const MoreOptionMessage = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`flex flex-nowrap items-center gap-1 rounded-full border-0 size-[25px] justify-center text-sm outline-none ${open ? "bg-blue-100 text-blue-700" : ""}`}
      >
        <SolarMenuDotsBold />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"}>
        <DropdownMenuItem>Đánh dấu đã đọc</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
