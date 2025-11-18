"use client";

import { Container } from "@/components/layout/container/container";
import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { DentCareLogoXL } from "@/assets/common/logo-xl";
import Link from "next/link";
import { useFooterItems } from "./use-footer-items";
import { ArrowUpIcon } from "@/assets/icons/arrow-up-icon";
import { LinkedInIcon } from "@/assets/icons/linkedin-icon";
import { FacebookIcon } from "@/assets/icons/facebook-icon";
import { InstagramIcon } from "@/assets/icons/instagram-icon";

export function FooterSection() {
  const { translate } = useHomeTranslations();
  const { items } = useFooterItems();

  return (
    <>
      <div className="w-[105.813rem] -bottom-[60.438rem] opacity-15 absolute left-1/2 -translate-x-1/2 h-[105.813rem] bg-white/40 backdrop-blur-lg border-[#9CDDDD50] border-13 shadow-[#00BF6F8C] shadow-1 rounded-full" />
      <div className="w-330 -bottom-[46.438rem] opacity-30 absolute left-1/2 -translate-x-1/2 h-330 bg-white/40 backdrop-blur-lg border-[#9CDDDD50] border-13 shadow-[#00BF6F] shadow-1 rounded-full" />

      <div className="relative mt-65.5 overflow-clip pt-32">
        <footer className="z-10 bg-[#101828] w-full relative py-[115px]">
          <Container>
            <div className="w-full flex items-start justify-between gap-y-10">
              <div className="flex flex-col gap-y-4 max-w-[480px]">
                <DentCareLogoXL />
                <p className="mt-6 text-lg text-white/50 font-normal leading-7">
                  {translate("home.footer.label")}
                </p>
              </div>

              {items.map((section) => (
                <div key={section.id} className="flex flex-col gap-y-6">
                  <h4 className="text-white uppercase pb-2 font-bold">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-y-6">
                    {section.items.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link?.href}
                          className="text-white/50 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <button className="px-1 py-5.5 rounded-full border border-white">
                <ArrowUpIcon />
              </button>
            </div>

            <div className="w-full gap-x-5.5 flex mt-[140px] justify-end pb-6 border-b border-[#ffffff27]">
              <div className="flex items-center gap-x-1.5">
                <LinkedInIcon />
                <span className="text-[#F6F9FD] font-medium">LinkedIn</span>
              </div>

              <div className="flex items-center gap-x-1.5">
                <FacebookIcon />
                <span className="text-[#F6F9FD] font-medium">Facebook</span>
              </div>

              <div className="flex items-center gap-x-1.5">
                <InstagramIcon />
                <span className="text-[#F6F9FD] font-medium">Instagram</span>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}
