"use client";
import { clsx } from "clsx";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { PlanShape } from "@/assets/shapes/plan-shape";

type PricingCardProps = {
  items: string[];
  title: string;
  price: string;
  type: string;
  active?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
};

export function PricingCard({
  items,
  title,
  price,
  type,
  active,
  onClick,
  onMouseOver,
}: PricingCardProps) {
  const { translate } = useHomeTranslations();
  return (
    <div
      onClick={onClick}
      onMouseOver={onMouseOver}
      className={clsx(
        "col-span-1 relative cursor-pointer transition-all duration-400 px-7 py-12 rounded-2xl bg-white",
        active && "bg-green-shade-06!"
      )}
    >
      {active && (
        <div className="absolute right-0 top-0">
          <PlanShape />
        </div>
      )}
      <div className="flex relative z-10 flex-col gap-y-10">
        <div className="flex flex-col">
          <h4
            className={clsx(
              "text-[#162B60] transition-all duration-400 text-[1.875rem] leading-none font-semibold",
              active && "text-white"
            )}
          >
            {title}
          </h4>
          <span className={clsx("text-[#8690AB]", active && "text-white")}>
            {translate("home.pricing.starting-at")}
          </span>
        </div>

        <div>
          <h4
            className={clsx(
              "text-[#162B60] transition-all duration-400 font-alternative-01 text-[1.875rem] font-semibold",
              active && "text-white"
            )}
          >
            {price}
            <span className="text-sm font-normal">/year</span>
          </h4>
          <span className={clsx("text-[#8690AB]", active && "text-white")}>
            {type}
          </span>

          <button
            className={clsx(
              "rounded-2xl w-full transition-all duration-400 py-4 px-15 pl-10 mt-10 bg-green-shade-06 text-white rounded-l-none",
              active && "rounded-l-2xl! bg-white text-green-shade-06! pl-15"
            )}
          >
            {translate("home.pricing.get-price-estimate")}
          </button>
        </div>
      </div>

      <ul className="flex relative z-10 flex-col gap-y-3 mt-10">
        {items?.map((item, index) => (
          <div key={index} className="flex items-center">
            <span
              className={clsx("text-lg text-[#162B60] transition-all duration-400", active && "text-white")}
            >
              {item}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}
