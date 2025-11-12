"use client";

import { useHomeTranslations } from "@/messages/hooks/use-home-translations";

export default function Home() {
  const { translate } = useHomeTranslations();
  return (
    <div className="bg-background w-full">{translate("home.header.title")}</div>
  );
}
