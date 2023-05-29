import Document, { Head, Html, Main, NextScript } from 'next/document';
import { STATIC_TEXT } from 'src/constants/static-text';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{STATIC_TEXT.title.mainTitle}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
