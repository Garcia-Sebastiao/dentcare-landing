import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { ReportsBannerBackground } from "@/assets/shapes/reports-banner-background";
import Image from "next/image";
import { AppMockImage } from "@/assets";

export function ReportsBanner() {
  const { translate } = useHomeTranslations();

  return (
    <div className="col-span-2 px-19 py-22 h-[25.578rem] relative bg-[#FBFBFB22] backdrop-blur-[97.12px] overflow-hidden rounded-3xl">
      <div className="w-full h-full absolute top-0 left-0">
        <ReportsBannerBackground />
      </div>

      <Image
        src={AppMockImage}
        alt="App Image"
        className="absolute z-10 -bottom-[10.313rem] w-130 h-132 -right-12"
      />

      <div className="w-100 absolute bottom-0 right-8 shadow-green-shade-02/20 shadow-2xl h-100 rounded-full border-3 border-[#00BF6F]/5" />

      <div className="relative z-10 max-w-77 flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl max-w-[12.813rem] font-semibold">
            {translate("home.modules.items.reports.title")}
          </h2>

          <p className="font-alternative max-w-77 text-shadow-dark-shade-03/60 text-xs leading-relaxed">
            {translate("home.modules.items.reports.label")}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-1">
              <h2 className="text-green-shade-03 font-extrabold text-[2.5rem]">
                40%
              </h2>

              <span className="text-dark-shade-04/76 text-xs text-alternative max-w-32">
                {translate("home.modules.items.reports.counters.admin-time")}
              </span>
            </div>

            <div className="flex flex-col gap-y-1">
              <h2 className="text-green-shade-03 font-extrabold text-[2.5rem]">
                92%
              </h2>

              <span className="text-dark-shade-04/76 text-xs text-alternative max-w-24">
                {translate(
                  "home.modules.items.reports.counters.user-satisfaction"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
