import AppFooter from "@components/AppFooter";
import AppHeader from "@components/AppHeader";
import "@tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Awesome shopping app with react, nextjs, tailwindcss, typescript, react-query, tailwindcss and more developed by @thedevsouvik"
        />
      </Head>

      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </>
  );
}
