import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta title="Etsy ProjectX" name="title" />

        <meta name="description" content="Etsy ProjectX as Template" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projectx.etsy.com" />
        <meta property="og:title" content="Etsy ProjectX" />
        <meta property="og:description" content="Etsy ProjectX as Template" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dkmf4t55r/image/upload/v1693567142/Og-Images/devhasibulislam.png"
        />

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
