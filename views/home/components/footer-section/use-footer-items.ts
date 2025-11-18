import { useHomeTranslations } from "@/messages/hooks/use-home-translations";

export function useFooterItems() {
  const { translate } = useHomeTranslations();

  const items = [
    {
      id: "institutional",
      title: translate("home.footer.links.institutional.title"),
      items: [
        {
          label: translate("home.footer.links.institutional.about"),
          href: "#",
        },
        {
          label: translate("home.footer.links.institutional.testimonials"),
          href: "#",
        },
        {
          label: translate("home.footer.links.institutional.plans"),
          href: "#",
        },
      ],
    },
    {
      id: "juridic",
      title: translate("home.footer.links.juridic.title"),
      items: [
        {
          label: translate("home.footer.links.juridic.privacy-policy"),
          href: "#",
        },
        {
          label: translate("home.footer.links.juridic.terms-of-service"),
          href: "#",
        },
      ],
    },
  ];

  return { items };
}
