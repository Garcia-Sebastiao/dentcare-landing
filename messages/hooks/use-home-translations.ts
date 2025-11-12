"use client";
import { useTranslations } from "next-intl";
import type { HomeMessageKeys } from "@/types/i18n";

export function useHomeTranslations() {
  const t = useTranslations("home");

  return {
    translate: t as (key: HomeMessageKeys) => string,
  };
}
