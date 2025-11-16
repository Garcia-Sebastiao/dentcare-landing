"use client";

import { Container } from "@/components/layout/container/container";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { useModulesItems } from "./use-modules-items";

export function ModulesSection() {
  const { items } = useModulesItems();
  const { translate } = useHomeTranslations();

  return (
    <section className="w-full relative mt-16 min-h-screen">
      <div className="w-151.5 absolute bottom-0 left-0 h-151.5 rounded-full bg-green-shade-02/82 blur-[1165.38px]" />
      <div className="w-151.5 absolute bottom-0 right-0 h-151.5 rounded-full bg-green-shade-02/82 blur-[1165.38px]" />

      <Container className="relative z-10">
        <div className="flex items-center flex-col gap-y-4">
          <h2 className="text-[2.5rem] font-semibold max-w-xs text-center font-display">
            {translate("home.modules.title")}
          </h2>

          <p className="text-center max-w-[24.188rem] font-display">
            {translate("home.modules.label")}
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-6">
          {items?.map((item) => {
            const Illustration = item.illustration;
            
            return (
              <div
                key={item.key}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Illustration />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm">{item.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
