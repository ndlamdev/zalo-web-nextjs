/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 12:27 PM - 26/09/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { Icon } from "@iconify/react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const ButtonMenu = (props: Props) => {
  return (
    <button className={"px-2 py-1 rounded-md border-[1px] border-gray-400"} {...props}>
      <Icon
        icon="ic:round-menu"
        width="24"
        height="24"
        style={{ color: "black" }}
      />
    </button>
  );
};
