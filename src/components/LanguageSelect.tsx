"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSelector() {
  const router = useRouter();
  const locale = useLocale();

  const changeLanguage = (value: string) => {
    const newLocale = value;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="">
      <select
        className="text-black"
        onChange={(e) => changeLanguage(e.target.value)}
        value={locale}
      >
        <option value="">Select language</option>
        <option value="en">English</option>
        <option value="ro">Romanian</option>
        <option value="de">German</option>
        {/* <option value="es">Español</option> */}
      </select>
    </div>
  );
}
