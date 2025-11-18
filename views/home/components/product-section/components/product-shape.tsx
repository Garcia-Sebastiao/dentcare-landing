import { ProductIllustration } from "@/assets/illustrations/product-illustrations";

export function ProductShape() {
  return (
    <div className="min-w-96 w-96 shadow-[#02170F3B] shadow-2xl overflow-hidden border-7 border-[#A7A7A71A] h-96 relative rounded-[21px] flex items-center justify-center mx-auto">
      <div className="w-[16.577rem] h-[16.577rem] rounded-full absolute -top-14 -right-18 bg-green-shade-07/40 blur-xl" />
      <div className="w-[16.577rem] h-[16.577rem] rounded-full absolute -top-14 -left-18 bg-green-shade-02/40 blur-xl" />
      <div className="w-[16.577rem] h-[16.577rem] rounded-full absolute -bottom-14 -right-18 bg-green-shade-02/40 blur-xl" />
      <div className="w-[16.577rem] h-[16.577rem] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-shade-02/40 blur-xl" />
      <div className="w-[16.577rem] h-[16.577rem] rounded-full absolute -bottom-14 -left-18 bg-green-shade-02 blur-[125.64px]" />

      <div className="relative z-10 left-6 top-10">
        <ProductIllustration />
      </div>
    </div>
  );
}
