import { JSX } from "react";
import { clsx } from "clsx";

type ProductItemProps = {
  icon: JSX.Element;
  title: string;
  label: string;
  showLine?: boolean;
};
export function ProductItem({
  icon,
  title,
  label,
  showLine,
}: ProductItemProps) {
  return (
    <div className={clsx("flex items-start transition-all w-full gap-x-4")}>
      <div className="min-w-12 min-h-12 rounded-md flex items-center justify-center bg-white">
        <div className="w-6 h-6 flex items-center">{icon}</div>
      </div>

      <div
        className={clsx(
          "flex flex-col max-w-85 gap-y-4",
          showLine && "pb-8 border-b border-black/25"
        )}
      >
        <h4 className="text-2xl font-semibold text-[#4E4E4ECC]">{title}</h4>
        <p className="text-dark-shade-03/78">{label}</p>
      </div>
    </div>
  );
}
