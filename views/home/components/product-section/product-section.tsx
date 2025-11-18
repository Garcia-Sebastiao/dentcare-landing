"use client";

import { ProductShape } from "./components/product-shape";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { Container } from "@/components/layout/container/container";
import { useProductItems } from "./use-product-items";
import { ProductItem } from "./components/product-item";

export function ProductSection() {
  const { translate } = useHomeTranslations();
  const { items } = useProductItems();

  return (
    <Container className="flex flex-col items-center gap-y-12 mt-36">
      <div className="flex items-center flex-col gap-y-4">
        <h2 className="text-[2.5rem] leading-12 font-semibold max-w-118 text-center">
          {translate("home.product.title")}
        </h2>

        <p className="text-center max-w-131">
          {translate("home.product.label")}
        </p>
      </div>

      <div className="rounded-xl px-15 bg-[#F8F8F8]/90 backdrop-blur-lg  py-13 h-122 flex items-center gap-x-12 w-full">
        <div className="flex flex-col gap-y-8">
          {items.slice(0, 2).map((item, index) => (
            <ProductItem
              showLine={index !== 1}
              key={item.key}
              icon={<item.icon />}
              title={item.title}
              label={item.label}
            />
          ))}
        </div>

        <ProductShape />

        <div className="flex flex-col gap-y-8">
          {items.slice(2).map((item, index) => (
            <ProductItem
              showLine={index !== 1}
              key={item.key}
              icon={<item.icon />}
              title={item.title}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
