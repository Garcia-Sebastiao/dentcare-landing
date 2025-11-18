import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { CalendarIcon } from "@/assets/icons/calendar-icon";
import { MultipleAccountsIcon } from "@/assets/icons/multiple-account-icon";
import { TimeLapseIcon } from "@/assets/icons/timelapse-icon";
import { UsedCurrencyIcon } from "@/assets/icons/used-currency-icon";

export function useBenefitsItems() {
  const { translate } = useHomeTranslations();

  const items = [
    {
      icon: CalendarIcon,
      key: "productivity",
      title: translate("home.benefits.productivity.title"),
      label: translate("home.benefits.productivity.label"),
      detail: translate("home.benefits.productivity.span"),
    },
    {
      icon: UsedCurrencyIcon,
      key: "coasts",
      title: translate("home.benefits.coasts.title"),
      label: translate("home.benefits.coasts.label"),
      detail: translate("home.benefits.coasts.span"),
    },
    {
      icon: MultipleAccountsIcon,
      key: "patient-experience",
      title: translate("home.benefits.patient-experience.title"),
      label: translate("home.benefits.patient-experience.label"),
      detail: translate("home.benefits.patient-experience.span"),
    },
    {
      icon: TimeLapseIcon,
      key: "time-economy",
      title: translate("home.benefits.time-economy.title"),
      label: translate("home.benefits.time-economy.label"),
      detail: translate("home.benefits.time-economy.span"),
    },
  ];

  return { items };
}
