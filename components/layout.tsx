import React from "react";
import { useSiteTitle, useSiteDescription } from "../hooks/useSiteData";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../components/theme";
import Head from "../components/Head";
import Header from "../components/Header";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <MDXProvider components={{ ...components }}>
      <>
        <Head />
        <Header />
        <main className="container px-4 mx-auto">{children}</main>
      </>
    </MDXProvider>
  );
}
