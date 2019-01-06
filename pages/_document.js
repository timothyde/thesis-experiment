import Document, { Head, Main, NextScript } from 'next/document';
import styledNormalize from 'styled-normalize';
import styles from 'styles/index.less';
import { injectGlobal, ServerStyleSheet } from 'styled-components';
import Link from 'next/link';
import { Button, Layout } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
`;

const Logo = styled.div`
  color: white;
  height: 64px;
  text-align: center;
  width: 128px;

  h1,
  h2,
  h3,
  h4 {
    color: white;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  transition: all 200ms ease;
`;

const HeaderButton = styled(Button)`
  margin: 16px 0px;
  @media (min-width: 576px) {
    margin: 24px;
  }
`;

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
          <Layout className="layout">
            <StyledHeader>
              <Link href="/">
                <a>
                  <Logo>
                    <h3>News Blog</h3>
                  </Logo>
                </a>
              </Link>
              <HeaderButton href="/" icon="home" ghost>
                Zur Startseite
              </HeaderButton>
            </StyledHeader>
            <Content style={{ padding: '0 50px' }}>
              <Main />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              News Feed powered by{' '}
              <a href="https://newsapi.org/sources">News API</a>
            </Footer>
          </Layout>
          <NextScript />
        </body>
      </html>
    );
  }
}
