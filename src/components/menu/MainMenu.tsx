/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 9:03 AM - 02/10/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";

type Props = {};
export const MainMenu = (props: Props) => {
  const [menuItemActive, setMenuItemActive] = useState<"message" | "contact">(
    "message",
  );

  return (
    <div className={"flex h-full flex-col justify-between"}>
      <div className={"mt-5 flex flex-col gap-2"}>
        <button
          className={`cursor-pointer rounded-sm p-2 hover:bg-blue-700 ${menuItemActive === "message" ? "bg-blue-800" : ""}`}
          onClick={() => setMenuItemActive("message")}
        >
          <Icon
            icon="eva:message-circle-fill"
            width="30"
            height="30"
            style={{ color: "white" }}
            className={`${menuItemActive === "message" ? "block" : "hidden"}`}
          />
          <Icon
            icon="eva:message-circle-outline"
            width="30"
            height="30"
            style={{ color: "white" }}
            className={`${menuItemActive !== "message" ? "block" : "hidden"}`}
          />
        </button>
        <button
          className={`cursor-pointer rounded-sm p-2 hover:bg-blue-700 ${menuItemActive === "contact" ? "bg-blue-800" : ""}`}
          onClick={() => setMenuItemActive("contact")}
        >
          <Icon
            icon="fa7-solid:contact-book"
            width="30"
            height="30"
            style={{ color: "white" }}
            className={`${menuItemActive === "contact" ? "block" : "hidden"}`}
          />
          <Icon
            icon="fa7-regular:contact-book"
            width="30"
            height="30"
            style={{ color: "white" }}
            className={`${menuItemActive !== "contact" ? "block" : "hidden"}`}
          />
        </button>
      </div>

      <div className={"mb-4 flex flex-col gap-2"}>
        <button
          className={`group cursor-pointer rounded-sm p-2 hover:bg-blue-700`}
        >
          <Icon
            icon="heroicons:cloud"
            width="30"
            height="30"
            style={{ color: "white" }}
            className={"block group-active:hidden"}
          />
          <Icon
            icon="heroicons:cloud-16-solid"
            width="30"
            height="30"
            style={{ color: "white" }}
            className={"hidden group-active:block"}
          />
        </button>
        <button className={`cursor-pointer rounded-sm p-2 hover:bg-blue-700 group`}>
            <Icon
                icon="uit:bag"
                width="30"
                height="30"
                style={{ color: "white" }}
                className={"block group-active:hidden"}
            />
            <Icon
                icon="uim:bag"
                width="30"
                height="30"
                style={{ color: "white" }}
                className={"hidden group-active:block"}
            />
        </button>
        <button className={`cursor-pointer rounded-sm p-2 hover:bg-blue-700 group`}>
            <Icon
                icon="ant-design:setting-outlined"
                width="30"
                height="30"
                style={{ color: "white" }}
                className={"block group-active:hidden"}
            />
            <Icon
                icon="ant-design:setting-filled"
                width="30"
                height="30"
                style={{ color: "white" }}
                className={"hidden group-active:block"}
            />
        </button>
      </div>
    </div>
  );
};
