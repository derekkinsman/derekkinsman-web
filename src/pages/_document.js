import Document, { Html, Head, Main, NextScript } from 'next/document'

class DeeWebDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon/favicon-16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/images/favicon/favicon-32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/images/favicon/favicon-96.png" sizes="96x96" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DeeWebDocument
