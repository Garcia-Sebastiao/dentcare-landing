import { useComponentsTranslations } from "@/messages/hooks/use-components-translations";

export function useNavItems() {
  const { translate } = useComponentsTranslations();

  const items = [
    {
      label: translate("components.header.navbar.about"),
      href: "/about",
    },
    {
      label: translate("components.header.navbar.plans"),
      href: "/plans",
    },
    {
      label: translate("components.header.navbar.testimonials"),
      href: "/testimonials",
    },
  ];
  
  return { items };
}
