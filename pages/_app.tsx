import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { SiteDataProvider } from "../hooks/useSiteData";
import { components } from "../components/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteDataProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </SiteDataProvider>
  );
}
export default MyApp;
