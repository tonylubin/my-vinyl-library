import React from "react";
import Head from "next/head";

const Title = () => {
  return (
    <Head>
      <title>My Music Library</title>
      <meta
        name="description"
        content="An web app for cataloguing your vinyl"
      />
      <link rel="icon" href="/favicon.ico"/>  
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Title;
