"use client";

import { DentCareLogo } from "@/assets/common/logo";
import { Button } from "@/components/shared/button/button";
import { useComponentsTranslations } from "@/messages/hooks/use-components-translations";
import { Navbar } from "./navbar/navbar";

export function Header() {
  const { translate } = useComponentsTranslations();

  return (
    <header className="w-full z-50 relative top-6.5 bg-white/41 p-1 mx-auto max-w-251.5 rounded-full min-h-[68px]">
      <div className="w-full h-full bg-white rounded-full py-2.5 px-10 flex items-center justify-between">
        <DentCareLogo />

        <Navbar />

        <Button className="py-2.5 px-8.5 rounded-full font-medium">
          {translate("components.header.connect")}
        </Button>
      </div>
    </header>
  );
}
