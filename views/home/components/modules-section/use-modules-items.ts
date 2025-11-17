import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { CalendarIllustration } from "@/assets/illustrations/modules/calendar-illustration";
import { FinancialManagementIllustration } from "@/assets/illustrations/modules/financial-management-illustration";
import { PontuaryIllustration } from "@/assets/illustrations/modules/pontuary-illustration";

export function useModulesItems() {
  const { translate } = useHomeTranslations();

  const items = [
    {
      key: "calendar",
      title: translate("home.modules.items.calendar.title"),
      label: translate("home.modules.items.calendar.label"),
      illustration: CalendarIllustration,
    },
    {
      key: "financial-management",
      title: translate("home.modules.items.financial-management.title"),
      label: translate("home.modules.items.financial-management.label"),
      illustration: FinancialManagementIllustration,
    },
    {
      key: "electronic-pontuary",
      title: translate("home.modules.items.electronic-pontuary.title"),
      label: translate("home.modules.items.electronic-pontuary.label"),
      illustration: PontuaryIllustration,
    },
  ];

  return { items };
}
