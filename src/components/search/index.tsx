/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 8:24 AM - 02/10/2025
 *  User: kimin
 **/

"use client";

// @flow
import * as React from "react";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

type Props = {};
export const Search = (props: Props) => {
  const [focusSearch, setFocusSearch] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  return (
    <div className={"flex gap-1"}>
      <div
        className={`flex items-center gap-1 rounded-sm border-1 bg-gray-200 px-3 py-1 ${focusSearch ? "border-blue-500" : ""}`}
        onClick={() => refInput.current?.focus()}
      >
        <Icon
          icon="mingcute:search-line"
          width="18"
          height="18"
          style={{ color: "black" }}
        />
        <input
          ref={refInput}
          type={"text"}
          placeholder={"Tìm kiếm"}
          className={"border-0 bg-gray-200 text-sm outline-none"}
          onFocus={() => setFocusSearch(true)}
          onBlur={() => setFocusSearch(false)}
        />
      </div>
      <button className={"cursor-pointer rounded-sm p-1 hover:bg-gray-200"}>
        <Icon
          icon="system-uicons:user-add"
          width="22"
          height="22"
          style={{ color: "black" }}
        />
      </button>
      <button className={"cursor-pointer rounded-sm p-1 hover:bg-gray-200"}>
        <Icon
          icon="lets-icons:group-add-light"
          width="25"
          height="25"
          style={{ color: "black" }}
        />
      </button>
    </div>
  );
};
