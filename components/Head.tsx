import { ReactNode } from "react";
import { useSiteTitle, useSiteDescription } from "../hooks/useSiteData";
import NextHead from "next/head";

type Props = {
  children: ReactNode;
};

export function Head() {
  const [title] = useSiteTitle();
  const [description] = useSiteDescription();

  return (
    <NextHead>
      <title>
        {title} | {description}
      </title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇹🇷</text></svg>"
      />
    </NextHead>
  );
}

export default Head;
