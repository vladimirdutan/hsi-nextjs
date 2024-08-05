"use client";
import LanguageSelector from "@/src/components/LanguageSelect";
import ToDoList from "@/src/components/ToDo";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations("");

  return (
    <div className="">
      <ToDoList />

      <LanguageSelector />
      <div className="flex flex-col space-y-1">
        <span className="">{t("cat")}</span>
        <span className="">{t("dog")}</span>
        <span className="">{t("car")}</span>
      </div>
    </div>
  );
}
