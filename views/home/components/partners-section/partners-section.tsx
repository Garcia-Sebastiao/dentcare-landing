import { PartnerLogo } from "@/assets/common/partner-logo";
import { Container } from "@/components/layout/container/container";

export function PartnersSection() {
  return (
    <Container>
      <div className="grid w-full mt-16 grid-cols-6 gap-x-[3.688rem]">
        {Array(6)
          .fill(0)
          ?.map((_, index) => (
            <div key={index} className="transition-all grayscale-100">
              <PartnerLogo />
            </div>
          ))}
      </div>
    </Container>
  );
}
