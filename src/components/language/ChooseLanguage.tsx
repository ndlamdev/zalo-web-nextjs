/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 9:07 AM - 26/09/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { useLanguage } from "@/stores/language.store";

type Props = unknown;

export const ChooseLanguage = (props: Props) => {
  const { language, change } = useLanguage();

  return (
    <ol className={"flex gap-2 text-xs active:font-semibold"}>
      <li
        className={`text-blue-600 hover:underline active:text-blue-600 ${language === "vn" && "font-semibold text-blue-600"}`}
        onClick={() => change("vn")}
      >
        Tiếng Việt
      </li>
      <li
        className={`text-blue-600 hover:underline active:text-blue-600 ${language === "en" && "font-semibold text-blue-600"}`}
        onClick={() => change("en")}
      >
        English
      </li>
    </ol>
  );
};
