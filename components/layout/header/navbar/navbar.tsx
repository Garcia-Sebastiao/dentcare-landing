import Link from "next/link";
import { useNavItems } from "./use-nav-items";

export function Navbar() {
  const { items } = useNavItems();

  return (
    <nav>
      <ul  className="flex items-center gap-x-8">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
