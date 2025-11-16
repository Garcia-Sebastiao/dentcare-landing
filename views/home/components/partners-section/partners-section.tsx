import { PartnerLogo } from "@/assets/common/partner-logo";
import { Container } from "@/components/layout/container/container";

export function PartnersSection() {
  return (
    <Container>
      <div className="grid w-full mt-4 grid-cols-8">
        {Array(8)
          .fill(0)
          ?.map((index, _) => (
            <div key={index} className="transition-all grayscale-100 hover:grayscale-0">
              <PartnerLogo />
            </div>
          ))}
      </div>
    </Container>
  );
}
