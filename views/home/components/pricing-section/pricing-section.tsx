"use client";
import { clsx } from "clsx";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { Container } from "@/components/layout/container/container";
import { useState } from "react";
import { Button } from "@/components/shared/button/button";
import { PricingCard } from "./components/pricing-card";

export function PricingSection() {
  const [active, setActive] = useState<number | null>(null);
  const [plan, setPlan] = useState<"monthly" | "annual">("monthly");
  const { translate } = useHomeTranslations();

  const plans = [
    { id: "monthly", label: translate("home.pricing.options.monthly") },
    { id: "annual", label: translate("home.pricing.options.annual") },
  ];

  return (
    <Container className="flex flex-col items-center gap-y-14 mt-36">
      <div className="flex items-center flex-col gap-y-4">
        <h2 className="text-[2.5rem] leading-12 font-normal max-w-118 text-center">
          {translate("home.pricing.title")}
        </h2>

        <p className="text-center max-w-130">
          {translate("home.pricing.label")}
        </p>
      </div>

      <div className="flex items-center p-1 rounded-full bg-white">
        {plans.map((item) => (
          <Button
            key={item.id}
            onClick={() => setPlan(item.id as "monthly" | "annual")}
            className={clsx(
              "text-xs font-medium px-6 py-3.5 transition-all w-full h-full rounded-full uppercase",
              plan == item.id
                ? "bg-green-shade-06 text-white"
                : "text-[#3B3472]! bg-transparent!"
            )}
            label={item.label}
          />
        ))}
      </div>

      <div className="grid w-full grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <PricingCard
            key={index}
            active={active === index}
            onClick={() => setActive(index)}
            onMouseOver={() => setActive(index)}
            title="Migrations"
            price="$1,950"
            type="Annual Subscription"
            items={[
              "Data Migration",
              "Simple Tax Preparation",
              "Fund Administration",
              "Fund Manager",
              "Investor Records",
            ]}
          />
        ))}
      </div>
    </Container>
  );
}
