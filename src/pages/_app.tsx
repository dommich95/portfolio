// pages/_app.js
import React from "react";
import { AppProps } from "next/app";
import "../app/globals.css";
import { Theme } from "@radix-ui/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
