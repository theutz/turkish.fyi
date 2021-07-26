import React from "react";
import Head from "next/head";
import Link from "../components/Link";
import { useSiteTitle, useSiteDescription } from "../hooks/useSiteData";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  const [title] = useSiteTitle();
  const [description] = useSiteDescription();

  return (
    <div>
      <Head>
        <title>
          {title} | {description}
        </title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇹🇷</text></svg>"
        />
      </Head>

      <header className="bg-gradient-to-b from-red-600 to-red-500 text-white mb-4">
        <div className="container px-4 py-2 mx-auto">
          <h1 className="text-xl">
            <Link href="/" className="text-white">
              {title}
            </Link>
          </h1>
        </div>
      </header>

      <main className="container px-4 mx-auto">{children}</main>
    </div>
  );
}
