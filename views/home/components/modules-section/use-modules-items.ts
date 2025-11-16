import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { CalendarIllustration } from "@/assets/illustrations/modules/calendar-illustration";
import { FinancialManagementIllustration } from "@/assets/illustrations/modules/financial-management-illustration";
import { PontuaryIllustration } from "@/assets/illustrations/modules/pontuary-illustration";

export function useModulesItems() {
  const { translate } = useHomeTranslations();

  const items = [
    {
      key: "calendar",
      title: translate("components.modules.items.calendar.title"),
      label: translate("components.modules.items.calendar.label"),
      illustration: CalendarIllustration,
    },
    {
      key: "financial-management",
      title: translate("components.modules.items.finacial-management.title"),
      label: translate("components.modules.items.finacial-management.label"),
      illustration: FinancialManagementIllustration,
    },
    {
      key: "eletronic-pontuary",
      title: translate("components.modules.items.eletronic-pontuary.title"),
      label: translate("components.modules.items.eletronic-pontuary.label"),
      illustration: PontuaryIllustration,
    },
  ];

  return { items };
}
