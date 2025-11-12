import { Container } from "../container/container";
import { useComponentsTranslations } from "@/messages/hooks/use-components-translations";

export function Header() {
  const { translate } = useComponentsTranslations();
  
  return (
    <header className="w-full">
      <Container>
        <div></div>
      </Container>
    </header>
  );
}
