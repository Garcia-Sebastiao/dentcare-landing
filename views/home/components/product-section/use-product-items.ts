import { useHomeTranslations } from "@/messages/hooks/use-home-translations";
import { VideoIcon } from "@/assets/icons/video-icon";
import { DataIcon } from "@/assets/icons/data-icon";
import { SupportIcon } from "@/assets/icons/support-icon";
import { FileIcon } from "@/assets/icons/file-icon";

export function useProductItems() {
  const { translate } = useHomeTranslations();

  const items = [
    {
      icon: VideoIcon,
      key: "demonstration",
      title: translate("home.product.items.demonstration.title"),
      label: translate("home.product.items.demonstration.label"),
    },
    {
      icon: FileIcon,
      key: "consulting",
      title: translate("home.product.items.consulting.title"),
      label: translate("home.product.items.consulting.label"),
    },
    {
      icon: SupportIcon,
      key: "support",
      title: translate("home.product.items.support.title"),
      label: translate("home.product.items.support.label"),
    },
    {
      icon: DataIcon,
      key: "migration",
      title: translate("home.product.items.migration.title"),
      label: translate("home.product.items.migration.label"),
    },
  ];

  return { items };
}
