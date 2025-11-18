"use client";

import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { Container } from "@/components/layout/container/container";
import Image from "next/image";
import { BenefitsIllustration } from "@/assets";
import { useBenefitsItems } from "./use-benefits-items";
import { BenefitsItem } from "./components/benefits-item";
import { useState } from "react";
import { PromotionBanner } from "./components/promotion-banner/promotion-banner";
import { DoctorImage, NurseImage } from "@/assets";
import { AmountIllustration } from "@/assets/illustrations/amount-illustration";

export function BenefitsSection() {
  const { items } = useBenefitsItems();
  const [activeBenefit, _] = useState(items[0]?.key);
  const { translate } = useHomeTranslations();
  
  return (
    <section className="w-full relative mt-36">
      <Container className="flex relative z-10 flex-col items-center gap-y-16">
        <div className="flex items-center flex-col gap-y-4">
          <h2 className="text-[2.5rem] leading-12 font-semibold max-w-118 text-center">
            {translate("home.benefits.title")}
          </h2>

          <p className="text-center max-w-160 font-alternative">
            {translate("home.benefits.label")}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-x-[157px]">
          <div className="w-full flex pt-6 flex-col gap-8">
            {items.map((item) => (
              <BenefitsItem
                icon={item?.icon ? <item.icon /> : <></>}
                active={activeBenefit == item?.key}
                isLast={items.length - 1 === items.indexOf(item)}
                title={item?.title}
                label={item?.label}
                detail={item?.detail}
                key={item?.key}
              />
            ))}
          </div>

          <Image src={BenefitsIllustration} alt="Benefits" className="" />
        </div>
      </Container>

      <div className="relative w-full">
        <div className="w-263 absolute -bottom-[518px] -left-[845px] h-263 rounded-full bg-green-shade-02/38 blur-[2023.08px]" />
        
        <div className="w-[60.938rem] absolute top-0 -right-[643px] h-250.5 rounded-full bg-green-shade-02/38 blur-[2528.85px]" />

        <Container className="flex flex-col relative z-10 gap-y-14">
          <PromotionBanner />

          <div className="w-full -mt-8 flex gap-7">
            <div className="flex-1 min-w-201 h-124 overflow-hidden rounded-3xl">
              <Image
                src={DoctorImage}
                alt="Doctor Image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 relative h-124 overflow-hidden rounded-3xl">
              <Image
                src={NurseImage}
                alt="Nurse Image"
                className="w-full h-full object-cover"
              />

              <div className="absolute -left-14 -bottom-24">
                <AmountIllustration />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
