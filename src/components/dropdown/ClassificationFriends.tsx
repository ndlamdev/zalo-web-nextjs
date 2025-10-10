/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 6:15 AM - 04/10/2025
 *  User: kimin
 **/

"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SolarAltArrowDownLinear } from "@/assets/icons/SolarAltArrowDownLinear";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@iconify/react";

type Props = {};
export const ClassificationFriends = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`flex flex-nowrap items-center gap-1 rounded-full border-0 px-2 py-[2px] text-sm outline-none ${open ? "bg-blue-100 text-blue-700" : ""}`}
      >
        Phân loại
        <SolarAltArrowDownLinear />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"end"}
        onPointerDownOutside={() => {
          setOpen(false);
        }}
        onInteractOutside={() => {
          setOpen(false);
        }}
      >
        <DropdownMenuLabel>Theo trạng thái</DropdownMenuLabel>
        <RadioGroup
          defaultValue="all-message"
          className={"flex flex-col gap-2"}
        >
          <Label
            htmlFor="rb-all-message"
            className={
              "Label flex items-center gap-3 px-2 py-2 font-normal hover:bg-gray-100"
            }
          >
            <RadioGroupItem value="all-message" id="rb-all-message" />
            Tất cả
          </Label>
          <Label
            htmlFor="rb-unread-message"
            className="Label flex items-center gap-3 px-2 py-2 font-normal hover:bg-gray-100"
          >
            <RadioGroupItem value="unread-message" id="rb-unread-message" />
            Chưa đọc
          </Label>
        </RadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Theo thẻ phân loại</DropdownMenuLabel>
        <label
          className="Label flex items-center gap-2 px-2 py-2 font-normal hover:bg-gray-100"
          htmlFor="cb-customer"
        >
          <Checkbox id={"cb-customer"} />
          <Icon
            icon="mynaui:tag-solid"
            width="18"
            height="18"
            className={"size-5 text-red-500"}
          />
          Khách hàng
        </label>
        <label
          className="Label flex items-center gap-2 px-2 py-2 font-normal hover:bg-gray-100"
          htmlFor="cb-family"
        >
          <Checkbox id={"cb-family"} />
          <Icon
            icon="mynaui:tag-solid"
            width="18"
            height="18"
            className={"size-5 text-green-500"}
          />
          Gia đình
        </label>
        <label
          className="Label flex items-center gap-2 px-2 py-2 font-normal hover:bg-gray-100"
          htmlFor="cb-work"
        >
          <Checkbox id={"cb-work"} />
          <Icon
            icon="mynaui:tag-solid"
            width="18"
            height="18"
            className={"size-5 text-yellow-700"}
          />
          Công việc
        </label>
        <label
          className="Label flex items-center gap-2 px-2 py-2 font-normal hover:bg-gray-100"
          htmlFor="cb-friend"
        >
          <Checkbox id={"cb-friend"} />
          <Icon
            icon="mynaui:tag-solid"
            width="18"
            height="18"
            className={"size-5 text-purple-600"}
          />
          Bạn bè
        </label>

        <label
          className="Label flex items-center gap-2 px-2 py-2 font-normal hover:bg-gray-100"
          htmlFor="cb-reply-after"
        >
          <Checkbox id={"cb-reply-after"} />
          <Icon
            icon="mynaui:tag-solid"
            width="18"
            height="18"
            className={"size-5 text-yellow-500"}
          />
          Trả lời sau
        </label>
        <label
          className="Label flex items-center gap-2 px-2 py-2 font-normal hover:bg-gray-100"
          htmlFor="cb-message-from-stranger"
        >
          <Checkbox id={"cb-message-from-stranger"} />
          <Icon
            icon="mdi:user-help"
            width="18"
            height="18"
            className={"size-5 text-gray-700"}
          />
          Tin nhắn từ người lạ
        </label>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={"cursor-pointer"}
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          Quản lý thể phân loại
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
