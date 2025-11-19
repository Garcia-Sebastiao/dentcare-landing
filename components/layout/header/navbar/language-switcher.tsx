/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { FranceFlag, UKFlag, PortugalFlag } from "@/assets";
import { ChevronDown } from "lucide-react";

const locales = ["en", "fr", "pt"] as const;
type Locale = (typeof locales)[number];

const flagMap: Record<Locale, any> = {
  en: UKFlag,
  fr: FranceFlag,
  pt: PortugalFlag,
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentLocale: Locale =
    (locales.find((l) => pathname.startsWith(`/${l}`)) as Locale) ?? "pt";

  const handleChangeLocale = (locale: Locale) => {
    Cookies.set("NEXT_LOCALE", locale, { expires: 365 });

    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }

    router.push("/" + segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-x-2"
      >
        <Image
          src={flagMap[currentLocale]}
          alt={currentLocale}
          className="w-5 h-5 rounded-full"
        />

        <span className="text-sm font-medium">
          {currentLocale.toUpperCase()}
        </span>

        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute mt-10 w-40 rounded-xl p-2 bg-white shadow-black/30 shadow-xl w z-10">
          <div className="py-1">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleChangeLocale(locale)}
                className={`flex items-center rounded-md gap-2 w-full text-left px-4 py-2 text-sm ${
                  currentLocale === locale
                    ? "bg-green-shade-01 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={flagMap[locale]}
                  alt={locale}
                  className="w-5 h-5 rounded-full"
                />
                <span>{locale.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
