import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon/favicon-16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/images/favicon/favicon-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96.png" sizes="96x96" />
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
