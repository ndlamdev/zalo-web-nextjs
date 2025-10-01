/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 12:06 PM - 26/09/2025
 * User: kimin
 **/

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Language = "vn" | "en";

type LanguageStore = {
  language: Language;
  change: (lang: Language) => void;
};

export const useLanguage = create<LanguageStore>()(
  devtools(
    persist(
      (set) => ({
        language: "en",
        change: (lang) => set(() => ({ language: lang })),
      }),
      { name: "theme-storage" },
    ),
  ),
);
