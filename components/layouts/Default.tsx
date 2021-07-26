import React from "react";
import { useSiteTitle, useSiteDescription } from "../../hooks/useSiteData";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../theme";
import Head from "../Head";
import Header from "../Header";
import Container from "../Container";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <MDXProvider components={components}>
      <>
        <Head />
        <Header />
        <main className="container px-4 mx-auto">{children}</main>
      </>
    </MDXProvider>
  );
}
