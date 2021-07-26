import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { SiteDataProvider } from "../hooks/useSiteData";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../components/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteDataProvider>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </SiteDataProvider>
  );
}
export default MyApp;
