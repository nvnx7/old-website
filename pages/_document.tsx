import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/MonumentExtendedBlack.otf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
