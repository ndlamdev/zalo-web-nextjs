/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 3:54 PM - 13/10/2025
 *  User: kimin
 **/

// @flow
import * as React from "react";
import { TabMessageType } from "@/components/tab/TabMessageType";
import { ClassificationFriends } from "@/components/dropdown/ClassificationFriends";
import { MoreOptionMessage } from "@/components/dropdown/MoreOptionMessage";
import { Search } from "@/components/search";
import { RoomChatItem } from "@/components/items/RoomChatItem";
import { roomChatsTest } from "@/assets/data/room-chats.test";

type Props = { showMenu?: boolean; onClickRoomChat: () => void };
export const MenuChat = ({ showMenu = false, onClickRoomChat }: Props) => {
  return (
    <div
      className={`${showMenu ? "grid grid-rows-[auto_1fr]" : "hidden"} h-screen overflow-hidden border-r-[1px] border-gray-300 lg:block`}
    >
      <div>
        <Search />
        <div
          className={
            "mt-1 flex items-center justify-between border-b-1 border-gray-300"
          }
        >
          <TabMessageType />

          <div className={"flex"}>
            <ClassificationFriends />
            <MoreOptionMessage />
          </div>
        </div>
      </div>
      <div className={"overflow-auto"}>
        {roomChatsTest.map((item) => (
          <RoomChatItem
            key={`room-chat-${item.id}`}
            id={item.id}
            onClick={onClickRoomChat}
            type={"group"}
            title={item.title}
            avatars={item.avatars}
            avatar={item.avatar}
            pin={item.pin}
          />
        ))}
      </div>
    </div>
  );
};
