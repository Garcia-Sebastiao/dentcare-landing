"use client";

import { Container } from "@/components/layout/container/container";
import { Button } from "@/components/shared/button/button";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { StockShape } from "@/assets/shapes/stock-shape";
import { QueriesShape } from "@/assets/shapes/queries-shape";
import { AvatarsGroups } from "@/assets/shapes/avatars-groups";
import { GridsShapes } from "@/assets/shapes/grids-shape";
import { SchedulingShape } from "@/assets/shapes/scheduling-shape";
import { ManagementShape } from "@/assets/shapes/management-shape";

export function HeroSection() {
  const { translate } = useHomeTranslations();
  return (
    <section className="w-full relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <GridsShapes />
      </div>

      <div className="w-151.5 absolute bottom-0 left-0 h-151.5 rounded-full bg-green-shade-02/82 blur-[1165.38px]" />
      <div className="w-151.5 absolute bottom-0 right-0 h-151.5 rounded-full bg-green-shade-02/82 blur-[1165.38px]" />

      <Container className="pt-[160px] flex flex-col items-center">
        <div className="flex w-full max-w-260 items-center flex-col gap-y-4 relative">
          <div className="flex items-center gap-x-3.5">
            <AvatarsGroups />

            <span className="font-medium">
              +458 {translate("home.hero.span")}
            </span>
          </div>

          <h1 className="text-[4rem] font-display leading-tight max-w-260 text-dark-shade-01 font-bold text-center">
            {translate("home.hero.title")}
          </h1>

          <p className="max-w-[37.938rem] font-sans text-center">
            {translate("home.hero.label")}
          </p>

          <div className="mt-8 flex gap-x-2.5">
            <Button className="bg-green-shade-01 rounded-full py-2.5 px-8.5">
              {translate("home.hero.options.start-now")}
            </Button>

            <Button className="!text-dark-shade-01 bg-transparent border-green-shade-01 border rounded-full py-2.5 px-8.5">
              {translate("home.hero.options.contact-consultant")}
            </Button>
          </div>

          <div className="absolute -top-10 left-0">
            <StockShape />
          </div>

          <div className="absolute -top-10 right-0">
            <QueriesShape />
          </div>

          <div className="absolute bottom-0 -left-10">
            <SchedulingShape />
          </div>

          <div className="absolute bottom-0 -right-10">
            <ManagementShape />
          </div>
        </div>
      </Container>
    </section>
  );
}
