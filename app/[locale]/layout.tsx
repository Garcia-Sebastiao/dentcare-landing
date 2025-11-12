import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Providers from "./providers";
import { loadMessages } from "@/i18n/messages";
import { Header } from "@/components/layout/header/header";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? routing.defaultLocale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers locale={locale} messages={messages}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
