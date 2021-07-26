import { ReactNode } from "react";
import { useSiteTitle, useSiteDescription } from "../hooks/useSiteData";
import Link from "../components/Link";

export function Header() {
  const [title] = useSiteTitle();
  return (
    <header className="mb-4 text-white bg-gradient-to-b from-red-600 to-red-500">
      <div className="container px-4 py-2 mx-auto">
        <h1 className="text-xl">
          <Link href="/" colorClassName="text-white">
            {title}
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
