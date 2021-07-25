import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const description = "All the Turkish I need, and nothing more.";
  return (
    <div>
      <Head>
        <title>turkish.fyi | {description}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇹🇷</text></svg>"
        />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  );
}
