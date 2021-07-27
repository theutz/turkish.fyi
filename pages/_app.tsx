import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { SiteDataProvider } from "../hooks/useSiteData";
import Wrapper from "../components/layouts/Default";
import Link from "../components/Link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteDataProvider>
      <MDXProvider components={{ wrapper: Wrapper, a: Link }}>
        <Component {...pageProps} />
      </MDXProvider>
    </SiteDataProvider>
  );
}
export default MyApp;
