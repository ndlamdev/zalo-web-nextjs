/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 4:22 PM - 13/10/2025
 *  User: kimin
 **/

// @flow
import * as React from "react";
import Image from "next/image";
import { SolarMenuDotsBold } from "@/assets/icons/SolarMenuDotsBold";
import { TablerPinFilled } from "@/assets/icons/TablerPinFilled";

type GroupChatProps = {
  type: "group";
  avatar?: string;
  avatars?: string[];
};

type PrivateRoomChatProps = {
  type: "private";
  avatar: string;
};

type Props = (GroupChatProps | PrivateRoomChatProps) & {
  id: string;
  title: string;
  pin?: boolean;
  onClick?: () => void;
};

export const RoomChatItem = (props: Props) => {
  return (
    <div
      className={
        "group/room-chat-item flex items-center gap-2 p-3 hover:bg-gray-100"
      }
      onClick={props.onClick}
    >
      {props.type === "group" &&
      props.avatars &&
      props.avatars.length > 2 &&
      !props.avatar ? (
        <GroupAvatar avatars={props.avatars} />
      ) : (
        <Image
          src={props.avatar ?? ""}
          alt={""}
          width={50}
          height={50}
          className={"size-auto rounded-full border-1 border-gray-300"}
        />
      )}

      <div className={"flex-1"}>
        <h5>{props.title}</h5>
        <p className={"text-sm text-gray-500"}>Chưa có tin nhắn</p>
      </div>
      <div className={`flex h-12 flex-col items-center justify-start gap-1`}>
        <p className={"size-6 rounded-sm p-1 text-gray-700 hover:bg-gray-200"}>
          <SolarMenuDotsBold
            className={"hidden group-hover/room-chat-item:block"}
          />
        </p>
        {props.pin && <TablerPinFilled className={"text-gray-500"} />}
      </div>
    </div>
  );
};

function GroupAvatar({ avatars }: { avatars: string[] }) {
  return (
    <div className={"relative size-12"}>
      <div
        className={
          "absolute top-0 left-0 z-20 size-6 rounded-full border-1 border-gray-400"
        }
      >
        <Image width={24} height={24} src={avatars[0]} alt={""} />
      </div>
      <div
        className={
          "absolute top-0 left-5 z-10 size-6 rounded-full border-1 border-gray-400"
        }
      >
        <Image width={24} height={24} src={avatars[0]} alt={""} />
      </div>
      <div
        className={`absolute top-5 size-6 rounded-full border-1 border-gray-400 ${avatars.length === 3 ? "left-2" : ""}`}
      >
        <Image width={24} height={24} src={avatars[0]} alt={""} />
      </div>
      <div
        className={`absolute top-5 left-5 size-6 rounded-full border-1 border-gray-400 ${avatars.length > 3 ? "flex items-center justify-center bg-gray-300" : "hidden"}`}
      >
        {avatars.length === 4 ? (
          <Image width={24} height={24} src={avatars[0]} alt={""} />
        ) : (
          <p style={{ fontSize: "12px" }} className={"font-medium"}>
            {avatars.length - 3}
          </p>
        )}
      </div>
    </div>
  );
}
