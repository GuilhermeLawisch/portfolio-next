import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&family=Roboto+Mono:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.13.0/devicon.min.css" />

          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>
            AOS.init();
          </script>
        </body>
      </Html>
    )
  }
}

export default MyDocument;