/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 3:48 PM - 13/10/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { ChatContainer } from "@/components/fragments/chat/ChatContainer";
import { MenuChat } from "@/components/fragments/chat/MenuChat";

export default function ChatFragment() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div
      className={
        "grid h-full grid-cols-[1fr] bg-white lg:grid-cols-[345px_1fr]"
      }
    >
      <MenuChat showMenu={showMenu} onClickRoomChat={() => setShowMenu(false)} />
      {!showMenu && (
        <ChatContainer onShowMenu={() => setShowMenu(true)} />
      )}
    </div>
  );
}
