import Document, { Head, Main, NextScript } from 'next/document';
import styledNormalize from 'styled-normalize';
import styles from 'styles/index.less';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

injectGlobal`

  ${styledNormalize}

`;

//   <style dangerouslySetInnerHTML={{ __html: styles }} />
// <link rel='stylesheet' href='https://unpkg.com/antd@3/dist/antd.min.css' />
export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Masterarbeit: Beispielseite</title>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="subject" content="Boilerplate" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/icons/favicon.ico"
          />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css"
            rel="stylesheet"
          />
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
