import Image from "next/image";
import { PromotionBannerBg } from "./promotion-banner-bg";
import { ClinicImproving } from "@/assets";
import { Button } from "@/components/shared/button/button";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";

export function PromotionBanner() {
  const { translate } = useHomeTranslations();

  return (
    <div className="w-full mt-30 px-19 py-22 h-[38.438rem] relative bg-[#FBFBFB22] backdrop-blur-[97.12px] overflow-hidden rounded-3xl">
      <div className="w-full h-full absolute top-0 left-0">
        <PromotionBannerBg />
      </div>

      <Image
        src={ClinicImproving}
        alt="App Image"
        className="absolute z-10  w-148 h-120 right-2"
      />

      <div className="w-[37.802rem] absolute bottom-0 right-8 shadow-green-shade-02/20 shadow-2xl h-[37.802rem] rounded-full border-3 border-[#00BF6F]/5" />

      <div className="relative z-10 max-w-97 flex flex-col gap-y-12 items-start mt-8.5">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[36px] font-semibold">
            {translate("home.benefits.transform-your-clinic.title")}{" "}
            <span className="text-green-shade-03">
              {translate("home.benefits.transform-your-clinic.span")}
            </span>
          </h2>

          <p className="max-w-97 text-shadow-dark-shade-03/60 text-sm leading-relaxed">
            {translate("home.benefits.transform-your-clinic.label")}
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-y-1">
              <h2 className="text-green-shade-03 font-extrabold text-[2rem]">
                500+
              </h2>

              <span className="text-dark-shade-04/76 text-xs text-alternative max-w-32">
                {translate(
                  "home.benefits.transform-your-clinic.counters.clinics"
                )}
              </span>
            </div>

            <div className="flex flex-col gap-y-1">
              <h2 className="text-green-shade-03 font-extrabold text-[2rem]">
                1M+
              </h2>

              <span className="text-dark-shade-04/76 text-xs text-alternative text-nowrap max-w-32">
                {translate(
                  "home.benefits.transform-your-clinic.counters.patients"
                )}
              </span>
            </div>

            <div className="flex flex-col gap-y-1">
              <h2 className="text-green-shade-03 font-extrabold text-[2rem]">
                24/7
              </h2>

              <span className="text-dark-shade-04/76 text-xs text-alternative max-w-32">
                {translate(
                  "home.benefits.transform-your-clinic.counters.technical-support"
                )}
              </span>
            </div>
          </div>
        </div>

        <Button className="rounded-full flex-none py-3 px-[55px]">
          {translate("home.benefits.transform-your-clinic.request-demo")}
        </Button>
      </div>
    </div>
  );
}
