/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 9:07 AM - 26/09/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { useState } from "react";

type Props = unknown;

export const ChooseLanguage = (props: Props) => {
  const [languageActive, setLanguageActive] = useState<"vn" | "en">("vn");

  return (
    <ol className={"flex gap-2 text-xs active:font-semibold"}>
      <li
        className={`text-blue-500 hover:underline active:text-blue-500 ${languageActive === "vn" && "font-semibold text-blue-500"}`}
        onClick={() => setLanguageActive("vn")}
      >
        Tiếng Việt
      </li>
      <li
        className={`text-blue-500 hover:underline active:text-blue-500 ${languageActive === "en" && "font-semibold text-blue-500"}`}
        onClick={() => setLanguageActive("en")}
      >
        English
      </li>
    </ol>
  );
};
