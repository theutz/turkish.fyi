import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import * as siteData from "../data/site";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout siteData={siteData}>
      <Component {...pageProps} siteData={siteData} />
    </Layout>
  );
}
export default MyApp;
