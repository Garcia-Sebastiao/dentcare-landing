"use client";

import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { Container } from "@/components/layout/container/container";
import { TestimonialItem } from "./components/testimonial-item";
import { AvatarImage } from "@/assets";

export function TestimonialsSection() {
  const { translate } = useHomeTranslations();

  return (
    <Container className="flex flex-col items-center gap-y-10 mt-36">
      <div className="flex items-center flex-col gap-y-4">
        <h2 className="text-[2.5rem] leading-12 font-semibold max-w-118 text-center">
          {translate("home.testimonials.title")}
        </h2>

        <p className="text-center max-w-160">
          {translate("home.testimonials.label")}
        </p>
      </div>

      <div className="w-full flex flex-nowrap gap-x-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <TestimonialItem
            key={index}
            image={AvatarImage}
            name="Dr. Ana Carolina Santos"
            role="Diretora Clinica"
            local="Clinica Smile"
            testimonial="Aumentamos 40% na eficiência da gestão clínica. O sistema transformou nossa forma de trabalhar."
          />
        ))}
      </div>
    </Container>
  );
}
