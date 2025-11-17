"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { Container } from "@/components/layout/container/container";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { useModulesItems } from "./use-modules-items";
import { DoctorImage } from "@/assets";
import { FollowersCountIllustration } from "@/assets/illustrations/modules/followers-count-illustration";
import { ReportsBanner } from "./reports-banner";

export function ModulesSection() {
  const { items } = useModulesItems();
  const { translate } = useHomeTranslations();

  return (
    <section className="w-full relative mt-[90px] min-h-screen">
      <div className="w-151.5 absolute bottom-0 left-0 h-151.5 rounded-full bg-green-shade-02/38 blur-[1165.38px]" />
      <div className="w-151.5 absolute bottom-0 right-0 h-151.5 rounded-full bg-green-shade-02/38 blur-[1165.38px]" />

      <Container className="relative z-10">
        <div className="flex items-center flex-col gap-y-4">
          <h2 className="text-[2.5rem] leading-12 font-semibold max-w-xs text-center">
            {translate("home.modules.title")}
          </h2>

          <p className="text-center max-w-[24.188rem] font-alternative">
            {translate("home.modules.label")}
          </p>
        </div>

        <div className="w-full flex flex-col gap-6.5">
          <div className="w-full grid grid-cols-3 mt-16 gap-6">
            {items?.map((item) => (
              <div
                key={item.key}
                className="flex flex-col relative bg-white/90 backdrop-blur-[98.38px] h-[25.578rem] py-8.5 px-12 rounded-3xl items-center"
              >
                <div className="w-68 absolute left-1/2 top-7 -translate-x-1/2 rounded-full blur-2xl bg-green-shade-02/60 h-68" />

                <div
                  className={clsx(
                    "w-[316px] flex justify-center items-center mt-4 h-[216px] relative z-10"
                  )}
                >
                  <item.illustration />
                </div>

                <div className="flex flex-col items-start gap-y-4  relative z-10">
                  <h2 className="font-semibold text-2xl text-dark-shade-02">
                    {item.title}
                  </h2>

                  <p className="text-xs font-alternative leading-relaxed text-[#666666]/78">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}

            <div className="col-span-1 relative h-[25.578rem] overflow-hidden rounded-3xl">
              <Image
                src={DoctorImage}
                alt="Doctor Image"
                className="w-full h-full object-cover"
              />

              <div className="absolute left-1/2 z-10 -translate-x-1/2 bottom-0">
                <FollowersCountIllustration />
              </div>

              <div className="w-full absolute top-0 left-0 h-full bg-linear-to-b from-55% from-transparent to-green-shade-01" />
            </div>

           <ReportsBanner />    
          </div>
        </div>
      </Container>
    </section>
  );
}
