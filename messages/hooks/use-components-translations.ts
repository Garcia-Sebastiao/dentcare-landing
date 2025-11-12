"use client";
import { useTranslations } from "next-intl";
import type { HomeMessageKeys } from "@/types/i18n";

export function useComponentsTranslations() {
  const t = useTranslations("components");

  return {
    translate: t as (key: HomeMessageKeys) => string,
  };
}
