import React from "react";
import { clsx } from "clsx";


type BenefitsItemProps = {
  icon: jSX.Element;
  title: string;
  label: string;
  detail: string;
  active?: boolean;
  isLast?: boolean;
};
export function BenefitsItem({
  icon,
  title,
  label,
  detail,
  active,
  isLast,
}: BenefitsItemProps) {
  return (
    <div
      className={clsx(
        "flex items-start transition-all px-10 w-full gap-x-8",
        active && "py-8.5 rounded-2xl bg-green-shade-04/31"
      )}
    >
      <div className="w-12 h-12 rounded-md flex items-center justify-center bg-white">
        <div className="w-6 h-6 flex items-center">{icon}</div>
      </div>

      <div
        className={clsx(
          "flex flex-col max-w-85 gap-y-4",
          !isLast && !active && "border-b border-[#2828284D] pb-8"
        )}
      >
        <h4 className="text-2xl font-semibold text-[#4E4E4ECC]">{title}</h4>
        <p className="font-alternative text-dark-shade-03/78">{label}</p>
        <span className="text-xl font-medium text-green-shade-05">
          {detail}
        </span>
      </div>
    </div>
  );
}
