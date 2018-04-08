// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Product design studio from Helsinki.</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes">

          <link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,900&subset=latin,cyrillic" rel="stylesheet" />
          <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900&subset=cyrillic,latin" rel="stylesheet" />
          <link href="//fonts.googleapis.com/css?family=Lato:300,400,500,600,700,800,900&subset=cyrillic,latin" rel="stylesheet" />

          <link rel="stylesheet" href="/_next/static/style.css?ab=10" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
