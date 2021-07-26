import React from "react";
import Link from "../components/Link";
import { useSiteTitle, useSiteDescription } from "../hooks/useSiteData";
import Head from "../components/Head";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  const [title] = useSiteTitle();

  return (
    <div>
      <header className="bg-gradient-to-b from-red-600 to-red-500 text-white mb-4">
        <div className="container px-4 py-2 mx-auto">
          <h1 className="text-xl">
            <Link href="/" colorClassName="text-white">
              {title}
            </Link>
          </h1>
        </div>
      </header>

      <main className="container px-4 mx-auto">{children}</main>
    </div>
  );
}
