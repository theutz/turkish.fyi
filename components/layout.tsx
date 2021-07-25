import React from "react";
import Head from "next/head";
import { useSiteTitle, useSiteDescription } from "../hooks/useSiteData";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  const [title] = useSiteTitle();
  const [description] = useSiteDescription();

  return (
    <div className="container mx-auto px-4">
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

      <main>{children}</main>
    </div>
  );
}
