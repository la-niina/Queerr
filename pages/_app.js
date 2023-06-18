import "../styles/globals.css";
import Head from "next/head.js";
import { Analytics } from '@vercel/analytics/react';

import { createTheme, NextUIProvider } from "@nextui-org/react";
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#4ADE7B",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Head>
        <title>Queerr - Supporting LGBTQIA+ Persons in Africa</title>
        <meta
          name="description"
          content="Queerr is an organization providing information and support to LGBTQIA+ persons in Africa. We also plan to provide financial and informational support for hormonal transitioning and train individuals in various skills for income opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Queerr - Supporting LGBTQIA+ Persons in Africa"
        />
        <meta
          property="og:description"
          content="Queerr is an organization providing information and support to LGBTQIA+ persons in Africa. We also plan to provide financial and informational support for hormonal transitioning and train individuals in various skills for income opportunities."
        />
        <meta property="og:image" content="/next.svg" />
        <meta property="og:url" content="https://queerr.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Queerr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:image:alt" content="Queerr Logo" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}
