import React from "react";
import Link from "../components/Link";
import { useSiteTitle, useSiteDescription } from "../hooks/useSiteData";
import Head from "../components/Head";
import Header from "../components/Header";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div>

      <main className="container px-4 mx-auto">{children}</main>
    </div>
  );
}
