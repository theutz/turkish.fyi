import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Default";
import { SiteDataProvider } from "../hooks/useSiteData";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteDataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteDataProvider>
  );
}
export default MyApp;
